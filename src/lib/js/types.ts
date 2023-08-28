export type generalStringObj = { [p: string]: string }
export type objectMixinStringOrObject<T> = {
  [p: string]: T | string | objectMixinStringOrObject<T>
}
