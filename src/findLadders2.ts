interface I {
  (beginWord: string, endWord: string, wordList: string[]): string[][]
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
export const findLadders: I = function(beginWord, endWord, wordList) {
  // beginWord, endWord should be included
  if (wordList.findIndex(item => item === beginWord) === -1 || wordList.findIndex(item => item === endWord) === -1) {
    return []
  }
  let change: string[] = [];
  
};

export function findOneLetterChange(word: string, wordList: string[]): string[] {
  const regList: RegExp[] = []
  for (let i = 0; i < word.length; i++) {
    const arr = word.split('')
    arr.splice(i, 1, '[a-z]?')
    const pattern = arr.join('')
    const reg = new RegExp(pattern, 'i')
    regList.push(reg)
  }
  const result: Array<string> = []
  regList.forEach(reg => {
    const found = wordList.find(item => item.match(reg))
    if (found) {
      result.push(found)
    }
  })
  return Array.from(result)
}
