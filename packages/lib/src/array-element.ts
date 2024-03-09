// NOTE: This is a type definition, not a variable.
// biome-ignore lint/suspicious/noRedeclare: ^^ Read above.
type ArrayElement<T> = T extends (infer U)[] | ReadonlyArray<infer U> | Array<infer U> | readonly (infer U)[] ? U : never

export default ArrayElement
