import { getLeastNumbers } from '../getLeastKNumbers'

describe('romanToInt', () => {
  it('III', () => {
    expect(getLeastNumbers([3, 2, 1], 2)).toEqual([1, 2])
  })
  it('IX', () => {
    expect(getLeastNumbers([0, 1, 2, 1], 1)).toEqual([0])
  })
})