function plusOne(digits: number[]): number[] {
  let result = [...digits]; // shallow copy
  // iterate from right to left
  for (let i = digits.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i] = result[i] + 1;
      return result;
    } else {
      result[i] = 0;
    }
  }
  
  result = [1, ...result];

  return result;
};
export {
  plusOne,
}