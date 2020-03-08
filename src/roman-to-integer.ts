/**
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

链接：https://leetcode-cn.com/problems/roman-to-integer
 */

const map: {[index: string]: number} = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}

export const romanToInt = function(s: string) {
  let result = 0
  for (let i = 0; i < s.length;) {
    if (s.substr(i, 2) in map) {
      result += map[s.substr(i, 2)]
      i += 2
    } else {
      result += map[s[i]]
      i++
    }
  }
  return result
};

