function runningSum(nums) {
  let sum = 0;
  const output = [];
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(sum);
    output.push(sum);
  }
  console.log(output);
  return output;
}

console.log(runningSum([1, 2, 3, 4]));
