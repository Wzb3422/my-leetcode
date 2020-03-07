// Link: https://leetcode-cn.com/problems/palindrome-number/submissions/

/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = function(x: number) {
  let str = x.toString()
  let reversedStrArr: string[] = []
  str.split('').forEach((item, index) => {
    reversedStrArr[str.length - index] = item
  })
  let reversedStr = reversedStrArr.join('')
  if (reversedStr === str) {
    return true
  }
  return false
};
