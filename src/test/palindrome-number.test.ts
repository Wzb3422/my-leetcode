import { isPalindrome } from '../palindrome-number'

describe('isPalindrome', () => {
  test('1234321', () => {
    expect(isPalindrome(1234321)).toBeTruthy()
  })
  test('-121', () => {
    expect(isPalindrome(-121)).toBeFalsy()
  })
  test('10', () => {
    expect(isPalindrome(10)).toBeFalsy()
  })
})
