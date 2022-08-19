/** https://leetcode.com/problems/two-sum/ */

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    const res = target - nums[i]
    const idxRes = nums.indexOf(res, i + 1)
    if(idxRes >= 0 && idxRes != i) return [i, idxRes]
  }

  return []
}

module.exports = {
  twoSum
}