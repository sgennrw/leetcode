import { findMedianSortedArrays } from "./index.js";

describe("Median of Two Sorted Arrays", () => {
  const testCases = [
    {
      nums1: [1, 3],
      nums2: [2],
      expectRes: 2.0,
    },
    {
      nums1: [1, 2],
      nums2: [3, 4],
      expectRes: 2.5,
    },
    {
      nums1: [1, 2, 3, 4, 5],
      nums2: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      expectRes: 9,
    },
  ];

  describe("solution", () => {
    testCases.map(({ nums1, nums2, expectRes }) => {
      test(`input: nums1 = [${nums1}], nums2 = [${nums2}] | output: ${expectRes}`, () => {
        expect(findMedianSortedArrays(nums1, nums2)).toStrictEqual(expectRes);
      });
    });
  });
});
