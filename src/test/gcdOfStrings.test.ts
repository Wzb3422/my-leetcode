import { gcdOfStrings } from '../gcdOfStrings'

describe('gcdOfStrings', () => {
  test('1234321', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toEqual('ABC')
  })
  test('-121', () => {
    expect(gcdOfStrings('ABABAB', 'ABAB')).toEqual('AB')
  })
  test('10', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toEqual('')
  })
  test('', () => {
    expect(gcdOfStrings('OCOOCO', 'OCOOCOOCO')).toEqual('OCO')
  })
  test('', () => {
    expect(gcdOfStrings('AAAAA', 'AAAAA')).toEqual('AAAAA')
  })
  test('', () => {
    expect(gcdOfStrings('AAA', 'AAAAAA')).toEqual('AAA')
  })
})
