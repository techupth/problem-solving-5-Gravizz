function moveZeroes(nums) {
  let sortNum = nums.sort();
  result = sortNum;
  for (let i = 0; i < sortNum.length; i++) {
    if (sortNum[i] == 0) {
      result.shift();
      result.push(0);
    }
  }
  return result;
}

console.log(moveZeroes([0, 1, 0, 3, 1, 12]));
