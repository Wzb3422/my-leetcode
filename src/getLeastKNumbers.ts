/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export const getLeastNumbers = function(arr: number[], k: number) {
  for (let i = 0, minIndex, tmp; i < k; i++) {
    minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr.splice(0, k)
}
