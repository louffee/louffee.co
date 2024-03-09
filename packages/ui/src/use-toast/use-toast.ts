'use client'

import { useEffect, useState, type ReactElement, type ReactNode } from 'react'

import ToastAction from '../toast-action/toast-action'
import type { ToastProps } from '../toast/toast'

/**
 * @internal The constant of the limit of the toast.
 */
const TOAST_LIMIT = 1 as const
/**
 * @internal The constant of the delay to remove the toast.
 */
const TOAST_REMOVE_DELAY = 1_000_000 as const

/**
 * The type of the toast action element.
 */
export type ToastActionElement = ReactElement<typeof ToastAction>

type ToastPropsExceptSome = Omit<ToastProps, 'title' | 'id'>

/**
 * The interface which defines the object of the toast payload.
 */
export interface ToastPayload extends ToastPropsExceptSome {
  /**
   * The id of the toast.
   */
  id: string
  /**
   * The custom React node for the title of the toast.
   */
  title?: ReactNode
  /**
   * The custom React node for the description of the toast.
   */
  description?: ReactNode
  /**
   * The custom React node for the action of the toast.
   *
   * @see {@link ToastActionElement}
   */
  action?: ToastActionElement
}

/**
 * @internal The constant object of the action types. The action types are used
 *           to dispatch the action to the reducer.
 */
const ACTION_TYPES = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

/**
 * @internal The mutable variable of the count of the toast.
 */
let toastCount = 0

/**
 * @internal The function which generates the id of the toast based on the
 *           current count of the toast.
 *
 * @example
 * ```ts
 * const id = generateToastId()
 * ```
 */
function generateToastId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER
  return toastCount.toString()
}

/**
 * @internal The type of the action type from the constant object of the action
 *           types.
 */
type ToastInternalActionType = typeof ACTION_TYPES

/**
 * @internal The type of the toast action.
 */
type ToastInternalStateAction =
  | {
      type: ToastInternalActionType['ADD_TOAST']
      toast: ToastPayload
    }
  | {
      type: ToastInternalActionType['UPDATE_TOAST']
      toast: Partial<ToastPayload>
    }
  | {
      type: ToastInternalActionType['DISMISS_TOAST']
      toastId?: ToastPayload['id']
    }
  | {
      type: ToastInternalActionType['REMOVE_TOAST']
      toastId?: ToastPayload['id']
    }

/**
 * @internal The toast state which contains the payload of the toasts and the
 *           action dispatchers for the toasts.
 */
interface InternalToastState {
  toasts: ToastPayload[]
}

/**
 * @internal The internal toast state which contains the payload of the toasts
 *           and the action dispatchers for the toasts.
 */
const internalToastTimeoutsMap = new Map<string, ReturnType<typeof setTimeout>>()

/**
 * @internal The `addToastToRemoveQueue()` function adds the toast id to the
 *           remove queue to remove the toast after the delay.
 */
function addToastToRemoveQueue(toastId: string) {
  if (internalToastTimeoutsMap.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    internalToastTimeoutsMap.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  internalToastTimeoutsMap.set(toastId, timeout)
}

/**
 * @internal The internal toast state reducer which handles the action
 *           dispatchers for the toasts. The reducer updates the state based on
 *           the action type and returns the new state.
 */
function reducer(state: InternalToastState, action: ToastInternalStateAction): InternalToastState {
  switch (action.type) {
    case 'ADD_TOAST': {
      const newState = { ...state }
      newState.toasts = [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)

      return newState
    }

    case 'UPDATE_TOAST': {
      const newState = { ...state }
      newState.toasts = state.toasts.map((toast) => {
        if (toast.id === action.toast.id) {
          const newToast = {
            ...toast,
            ...action.toast,
          }
          return newToast
        }
        return toast
      })

      return newState
    }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToastToRemoveQueue(toastId)
      } else {
        for (const { id: toastId } of state.toasts) {
          addToastToRemoveQueue(toastId)
        }
      }

      const newState = { ...state }
      const { toasts } = state

      newState.toasts = toasts.map((toast) => {
        if (toast.id === toastId || toastId === undefined) {
          const newToast = {
            ...toast,
            isOpen: false,
          }
          return newToast
        }
        return toast
      })

      return newState
    }
    case 'REMOVE_TOAST': {
      if (action.toastId === undefined) {
        const newState = { ...state }
        newState.toasts = []

        return newState
      }

      const newState = { ...state }
      newState.toasts = state.toasts.filter(({ id }) => id !== action.toastId)

      return newState
    }
  }
}

/**
 * @internal The array of the listeners. The listeners are used to notify the
 *           state changes to the listeners.
 */
const listeners: ((state: InternalToastState) => void)[] = []

/**
 * @internal The memory state of the toasts. The memory state is used to keep
 *           track of the toasts and notify the listeners.
 */
let memoryState: InternalToastState = {
  toasts: [],
}

/**
 * @internal The function which dispatches the action to the reducer. The
 *           function updates the memory state and notifies the listeners.
 */
function dispatch(action: ToastInternalStateAction) {
  memoryState = reducer(memoryState, action)

  for (const listener of listeners) {
    listener(memoryState)
  }
}

/**
 * The type which defines the payload of the `toast()` function.
 *
 * @see {@link toast}
 */
export type ToastFnPayload = Omit<ToastPayload, 'id'>

/**
 * The `toast()` function is a function which creates a new toast with the given
 * payload and returns the action dispatchers for the toast.
 *
 * The returned function `dismiss()` dismisses the toast. The returned function
 * `update()` updates the toast with the given payload.
 *
 * @example
 * ```ts
 * const { dismiss, update, toastId } = toast({
 *   title: 'Title',
 *   description: 'Description',
 * })
 *
 * update({
 *   title: 'New Title',
 *   description: 'New Description',
 * })
 *
 * dismiss(toastId)
 * ```
 *
 * @see {@link ToastFnPayload}
 */
export function toast({ ...toast }: ToastFnPayload) {
  /**
   * The automatically generated string which works as the identifier for every
   * toast appended to the queue of rendering.
   */
  const id = generateToastId()

  /**
   * The `update()` function updates the toast with the given
   * {@link ToastPayload | payload}, by modifying the state of the toast.
   */
  function update(payload: ToastPayload) {
    return dispatch({
      type: 'UPDATE_TOAST',
      toast: {
        ...payload,
        id,
      },
    })
  }
  /**
   * The `dismiss()` function dismisses the toast by updating the state of the
   * toasts and removing the toast from the queue.
   */
  function dismiss() {
    return dispatch({ type: 'DISMISS_TOAST', toastId: id })
  }

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...toast,
      id,
      isOpen: true,
      onOpenChange(open) {
        if (!open) {
          dismiss()
        }
      },
    },
  })

  return {
    toastId: id,
    dismiss,
    update,
  }
}

/**
 * The `useToast()` function is a custom React hook which returns the state of
 * the toasts and the action dispatchers for the toasts.
 *
 * @example
 * ```ts
 * const { toasts, toast, dismiss } = useToast()
 * ```
 */
function useToast() {
  const [toastMemoryState, updateToastMemoryState] = useState<InternalToastState>(memoryState)

  // NOTE: We require to run the effect whenever the "state" changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: ^^ Read above.
  useEffect(() => {
    listeners.push(updateToastMemoryState)

    return () => {
      const index = listeners.indexOf(updateToastMemoryState)

      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [toastMemoryState])

  /**
   * The `dismiss()` function dismisses the toast with the given id. If the id
   * is not provided, it dismisses all the toasts.
   *
   * @example
   * ```ts
   * const { dismiss } = useToast()
   * dismiss('toast-id')
   * ```
   */
  function dismiss(toastId?: string) {
    return dispatch({ type: 'DISMISS_TOAST', toastId })
  }

  return {
    ...toastMemoryState,
    toast,
    dismiss,
  }
}

export default useToast
