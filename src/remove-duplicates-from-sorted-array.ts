/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function(nums: number[]) {
  for (let i = 0; i< nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
