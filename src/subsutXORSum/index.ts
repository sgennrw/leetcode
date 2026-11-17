// https://leetcode.com/problems/sum-of-all-subset-xor-totals/
function subsetXORSum(nums: number[]): number {
  return sumSubset(0, nums);
}

function sumSubset(sum: number, nums: number[]): number {
  let res = sum;
  for (let i = 0; i < nums.length; i++) {
    res += sumSubset(sum ^ nums[i], nums.slice(i + 1));
  }
  return res;
}

export { subsetXORSum };
