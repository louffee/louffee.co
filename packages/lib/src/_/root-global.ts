// See reference file from lodash:
// https://github.com/lodash/lodash/blob/main/src/.internal/freeGlobal.ts
const serverSideGlobalObject = typeof global === 'object' && global !== null && global.Object === Object && global

// See reference file from lodash:
// https://github.com/lodash/lodash/blob/main/src/.internal/root.ts

/**
 * Detect free variable `globalThis`.
 */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

/**
 * Detect free variable `self`.
 */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/**
 * Used as a reference to the global object. In Node.js, `global` is the global
 * object. In a browser, `self` is the global object. In JavaScript, `this` is
 * the global object.
 *
 * The `rootGlobal` is used to avoid the strict mode of `this` in non-strict
 * mode environments.
 */
const rootGlobal: typeof globalThis = freeGlobalThis || serverSideGlobalObject || freeSelf || Function('return this')()

export default rootGlobal
