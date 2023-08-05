import { plusOne } from '../plus-one'

describe('plus one', () => {
  it('123 + 1 = 124', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  })

  it('4321 + 1 = 4322', () => {
    expect(plusOne([4, 3, 2 ,1])).toEqual([4, 3, 2, 2]);
  })

  it('9 + 1 = 10', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  })

  it('1299 + 1 = 1300', () => {
    expect(plusOne([1, 2, 9, 9])).toEqual([1, 3, 0, 0]);
  })

  it('9999 + 1 = 10000', () => {
    expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
  })
})