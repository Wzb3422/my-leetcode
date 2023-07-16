import { twoSum } from '../two-sum'

describe('twoSum', () => {
  test('[2,7,11,15] 9', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([1, 0])
  })
  test('[3,2,4], 6', () => {
    expect(twoSum([3,2,4], 6)).toEqual([2, 1])
  })

  
  test('Same digits', () => {
    expect(twoSum([4,4], 8)).toEqual([2, 1])
  })
})
