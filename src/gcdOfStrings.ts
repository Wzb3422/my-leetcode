/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const getRepeatSubString = (str: string) => {
  for (let subStrLength = 2; subStrLength <= str.length - subStrLength; subStrLength++) {
    let subStr = str.substr(0, subStrLength)
    if (subStr === str.substr(0 + subStrLength, subStrLength)) {
      return subStr
    }
  }
  return ''
}

const isSingleLetterString = (str: string) => {
  if (str.split(str[0]).join('').length = 0) {
    return true
  }
  return false
}

export const gcdOfStrings = function(str1: string, str2: string) {
  if (isSingleLetterString(str1)) {
    function gcd(a, b) {
      if (a % b == 0) return b;
      return gcd(b, a % b);
  }
  } else {
    const rptStr = getRepeatSubString(str1)
    if (str1.split(rptStr).concat(str2.split(rptStr)).join('').length === 0) {
      return rptStr
    }
    return ''
  }

};
