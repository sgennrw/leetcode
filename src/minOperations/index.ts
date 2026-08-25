// https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/description/

const minOperations = (nums: number[], k: number) => {
  const sum = nums.reduce((acc, cur) => cur + acc, 0);
  return sum % k;
};

export { minOperations };
