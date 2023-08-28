/**
 * 检测数值是否为null或者undefined
 * @param v 检测传入数值
 * @returns
 */
export function isUndAndNul(v: any) {
  return isUndef(v) || isNul(v)
}

/**
 * 检测传入数值是否为 undefined
 * @param v 待检测数值
 * @returns boolean
 */
export function isUndef(v: any) {
  return typeof v === 'undefined'
}

/**
 * 检测传入数值是否为 null
 * @param v 待检测数值
 * @returns boolean
 */
export function isNul(v: any) {
  return typeof v !== 'object' && v === null
}

/**
 * 检测数值是否为 对象
 * @param v 待检测数值
 * @returns boolean
 */
export function isObj(v: any) {
  return typeof v === 'object' && v !== null
}
