import { distributeCandies } from '../distribute-candies-to-people'

describe('分糖果', () => {
  test('candies = 7, num_people = 4', () => {
    expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1])
  })
  test('candies = 10, num_people = 3', () => {
    expect(distributeCandies(10, 3)).toEqual([5, 2, 3])
  })
})
