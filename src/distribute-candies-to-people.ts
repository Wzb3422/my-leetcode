// 分糖果 https://leetcode-cn.com/problems/distribute-candies-to-people/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */


export const distributeCandies = function(candies: number, num_people: number) {
  let round = 0
  let result: number[] = getZeroArr(num_people)
  let candiesRemain = candies
  console.log(`开始分糖啦，一共${candiesRemain}颗糖`)
  for (let i = 0; i < candies; i++) {
    let index = i % num_people
    let nthPeople = index + 1
    let distributeOnce = i + 1
    if (distributeOnce < candiesRemain) {
      candiesRemain -= distributeOnce
    } else {
      distributeOnce = candiesRemain
      candiesRemain = 0
    }
    result[index] += distributeOnce
    console.log(result)
    console.log(`给第${nthPeople}人 分${distributeOnce}颗🍬, 现在还剩${candiesRemain}颗🍬`)
    if (index === num_people - 1) {
      round++
      console.log(`分完一圈啦，现在分完了 ${round} 圈`)
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
