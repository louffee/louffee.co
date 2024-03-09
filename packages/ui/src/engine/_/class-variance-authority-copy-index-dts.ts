// NOTE: We're copying the types to have access to the types from the
//       `class-variance-package` in the `styled` function. This should not be
//       imported directly in the codebase, but rather used as a reference for
//       the `styled` function. It's possible to find these types in the
//       following files:
//         - `node_modules/class-variance-authority/dist/index.d.ts`
//         - `node_modules/class-variance-authority/dist/types.ts`

import type clsx from 'clsx'
import type { ClassValue as Clsx$ClassValue } from 'clsx'

type ClassValue = Clsx$ClassValue
type ClassProp =
  | {
      class: ClassValue
      className?: never
    }
  | {
      class?: never
      className: ClassValue
    }
  | {
      class?: never
      className?: never
    }
export type OmitUndefined<T> = T extends undefined ? never : T
export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T
// biome-ignore lint/suspicious/noExplicitAny: Required any from CVA.
export type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, 'class' | 'className'>
export type CxOptions = Parameters<typeof clsx>
export type CxReturn = ReturnType<typeof clsx>
export declare const cx: typeof clsx
type ConfigSchema = Record<string, Record<string, ClassValue>>
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}
type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined
}
type Config<T> = T extends ConfigSchema
  ? {
      variants?: T
      defaultVariants?: ConfigVariants<T>
      compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[]
    }
  : never
type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp

// We rename the types below so they don't get confused with the original ones.
type CVA$Config<T> = Config<T>
type CVA$ClassProps<T> = Props<T>

export type { CVA$ClassProps, CVA$Config }
