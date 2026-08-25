// https://leetcode.com/problems/median-of-two-sorted-arrays

const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const halfLen = nums.length / 2;

  if (nums.length % 2 === 0) {
    return (nums[halfLen - 1] + nums[halfLen]) / 2;
  }

  return nums[Math.floor(halfLen)];
};

export { findMedianSortedArrays };
