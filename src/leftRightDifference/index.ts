// https://leetcode.com/problems/left-and-right-sum-differences/

function leftRightDifference(nums: number[]): number[] {
  const len = nums.length;
  const leftSum = new Array(len).fill(0);

  const ans = [];
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 1; i < len; i++) {
    leftSum[i] = nums[i - 1] + leftSum[i - 1];
    const prevRightSum = total - nums[i - 1] - leftSum[i - 1];

    ans.push(Math.abs(leftSum[i - 1] - prevRightSum));
  }

  ans.push(leftSum[len - 1]);

  return ans;
}
