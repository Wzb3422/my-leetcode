import { isValid } from '../valid-parentheses'

describe('Valid Parentheses', () => {
  test('valid ()', () => {
    expect(isValid('()')).toBe(true)
  })
  test('valid ()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  test('invalid (]', () => {
    expect(isValid('(]')).toBe(false)
  })

  test('valid [(){}]', () => {
    expect(isValid('[(){}]')).toBe(true)
  })

  test('valid {([])}', () => {
    expect(isValid('{([])}')).toBe(true)
  })

  test('valid (){}}{', () => {
    expect(isValid('(){}}{')).toBe(false)
  })
  
})
