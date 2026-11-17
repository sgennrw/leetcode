// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums: number[]): number {
  nums.sort();

  let sum = 0;

  console.log(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    let n = 1;
    let j = i + 1;
    for (; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] === nums[j]) n++;
      else break;
    }
    i = --j;

    console.log(n);

    if (n > 1) {
      sum += (n * (n - 1)) / 2;
    }
  }

  return sum;
}

console.log(numIdenticalPairs([2, 1, 3, 2]));
