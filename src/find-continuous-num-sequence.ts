// Link: https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
/**
 * 从 0 开始向右遍历，每到一个数，进行下面到操作
 * b = (2 x sum) / n - a    n 递增到 length - a
 * n 为子数列长度
 * 其中 b = a + n - 1
 * 期间如果满等式 则 回到上层循环break
 * 记录到 result 中
 * 遍历结束
 */
function getContinuosSque(start: number, length: number) {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = start + i
  }
  return result
}
export const findContinuousSequence = function(target: number) {
  let result = []
  for (let i = 1; i < target; i++) {
    for (let n = 1; n < target - i; n++) {
      if ((2 * target) / n - i === i + n - 1) {
        result.push(getContinuosSque(i, n))
      }
    }
  }
  return result
};

console.log(findContinuousSequence(87760))
