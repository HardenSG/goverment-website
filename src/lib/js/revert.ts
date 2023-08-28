import { isObj } from './check'
import type { generalStringObj, objectMixinStringOrObject } from './types'
import { hasOwn } from './utils'

/**
 * 传入移动端的rpx值转换为多端适配的数值
 * @param rpx 对比值
 * @returns 真实值
 */
export function revertRpxToPx(rpx: number): number {
  const screenWidth = window.innerWidth || document.body.clientWidth
  return (rpx / 750) * screenWidth
}

/**
 * 拍平多级对象列表
 * @param o 待转换对象列表
 * @returns {generalStringObj}
 */
export function revertObjectToFlatObject(
  o: objectMixinStringOrObject<objectMixinStringOrObject<any | generalStringObj>>
): generalStringObj | undefined {
  const isNeedCont = isObj(o)
  if (!isNeedCont) return undefined
  let newObj: generalStringObj = {}

  for (const k in o) {
    if (hasOwn(o, k)) {
      const v: string | any = o[k]
      if (isObj(v)) {
        newObj = {
          ...newObj,
          ...revertObjectToFlatObject(v as generalStringObj)
        }
      } else {
        newObj[k] = v as string
      }
    }
  }

  return newObj
}

/**
 * 将对象转换为数组 - 针对需要协同处理的对象
 * @param o 待转换数组的对象
 * @returns {Array<T>}
 */
export function revertObjectToArray<T>(
  o: objectMixinStringOrObject<objectMixinStringOrObject<any | generalStringObj>>
): Array<T> {
  const flatArr = revertObjectToFlatObject(o)
  if (!flatArr) return []

  const arr: T[] = []
  for (const k in flatArr) {
    arr.push({
      key: k,
      value: flatArr[k]
    } as T)
  }

  return arr
}
