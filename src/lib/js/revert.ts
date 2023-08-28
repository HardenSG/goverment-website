/**
 * 传入移动端的rpx值转换为多端适配的数值
 * @param rpx 对比值
 * @returns 真实值
 */
export function revertRpxToPx(rpx: number): number {
  const screenWidth = window.innerWidth || document.body.clientWidth
  return (rpx / 750) * screenWidth
}
