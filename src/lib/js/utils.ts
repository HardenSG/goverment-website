import { revertObjectToArray, revertObjectToFlatObject } from './revert'
import type { generalStringObj, objectMixinStringOrObject } from './types'

/**
 * 预加载静态资源列表
 * @param o 待加载对象列表
 * @returns {{key: string, value: string}[]}
 */
export function preloadStaticResource(
  o: objectMixinStringOrObject<objectMixinStringOrObject<any> | generalStringObj>
) {
  const arr = revertObjectToArray<{
    key: string
    value: string
  }>(o)
  const img = document.createElement('img')
  Promise.all(arr).then((res) => {
    res.forEach((v) => {
      img.src = v.value
    })
  })

  return arr
}

/**
 * 判断是否为该对象挂在的属性
 * @param o 待检测对象
 * @param k 待检测属性
 * @returns {boolean}
 */
export const hasOwn = (o: object, k: string) => Object.prototype.hasOwnProperty.call(o, k)
