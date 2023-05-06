/** https://leetcode.com/problems/number-of-good-pairs/ */

const numIdenticalPairSol1 = (nums) => {
  let count = 0;
  for(let i = 0; i < nums.length - 1 ;i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  
  return count;
};

const numIdenticalPairSol2 = (nums) => {
  const map = {};
  nums.forEach((num) => {
    map[num] = ++map[num] || 1;
  });

  let count = 0;
  Object.values(map).forEach((c) => {
    if (c > 1) {
      count += ((c - 1) * c) / 2;
    }
  });

  return count;
};

module.exports = {
  numIdenticalPairSol1,
  numIdenticalPairSol2,
};
