import { removeDuplicates } from '../remove-duplicates-from-sorted-array'

describe('removeDuplicates', () => {
  it('III', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2)
  })
  it('IV', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5)
  })
})