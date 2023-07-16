// Link: https://leetcode-cn.com/problems/distribute-candies-to-people/

export const distributeCandies = function(candies: number, num_people: number) {
  let round = 0
  let result: number[] = getZeroArr(num_people)
  let candiesRemain = candies
  for (let i = 0; i < candies; i++) {
    let index = i % num_people
    let distributeOnce = i + 1
    if (distributeOnce < candiesRemain) {
      candiesRemain -= distributeOnce
    } else {
      distributeOnce = candiesRemain
      candiesRemain = 0
    }
    result[index] += distributeOnce
    if (index === num_people - 1) {
      round = round + 1
    }
    if (candiesRemain === 0) {
      return result
    }
  }
  return result
  function getZeroArr(length: number) {
    let arr: number[] = []
    for (let i = 0; i < length; i++) {
      arr[i] = 0
    }
    return arr
  }
};
