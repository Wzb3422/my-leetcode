import { findContinuousSequence } from '../find-continuous-num-sequence'

describe('findContinuousSequence', () => {
  test('target = 9', () => {
    expect(findContinuousSequence(9)).toEqual([[2,3,4],[4,5]])
  })
  test('candies = 10, num_people = 3', () => {
    expect(findContinuousSequence(15)).toEqual([[1,2,3,4,5],[4,5,6],[7,8]])
  })
})
