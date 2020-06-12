import { findLadders, findOneLetterChange } from '../findLadders2'

describe('romanToInt', () => {
  const beginWord = 'hit'
  const endWord = 'cog'
  it('case 1', () => {
    const wordList = ["hot","dot","dog","lot","log","cog"]
    const result = [
      ["hit","hot","dot","dog","cog"],
      ["hit","hot","lot","log","cog"]
    ]
    expect(findLadders(beginWord, endWord, wordList)).toEqual(result)
  })
  it('case 2', () => {
    const wordList = ["hot","dot","dog","lot","log"]
    expect(findLadders(beginWord, endWord, wordList)).toEqual([])
  })
  it('one leeter changed', () => {
    const wordList = ["hot","dot","dog","lot","log"]
    expect(findOneLetterChange(beginWord, wordList)).toEqual(['hot'])
  })
})