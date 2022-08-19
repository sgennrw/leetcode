/** https://leetcode.com/problems/search-insert-position/  */

const searchInsertPosition = (nums, target) => {
  // Solution 1: use Javascript's function
  if (target > nums[nums.length - 1]) return nums.length;
  return nums.findIndex((num) => num >= target);

  // todo: Solution 2: binary search ¯\_( ͡❛ ͜ʖ ͡❛)_/¯
};

module.exports = {
  searchInsertPosition,
};
