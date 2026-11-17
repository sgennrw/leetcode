import { subsetXORSum } from "./index.js";

describe("Subset XOR Sum", () => {
  const testCases: { nums: number[]; expectRes: number }[] = [
    {
      nums: [1, 3],
      expectRes: 6,
    },
    { nums: [5, 1, 6], expectRes: 28 },
    { nums: [3, 4, 5, 6, 7, 8], expectRes: 480 },
  ];

  testCases.map(({ nums, expectRes }) => {
    test(`input: nums = [${nums}], output: ${expectRes}`, () => {
      expect(subsetXORSum(nums)).toBe(expectRes);
    });
  });
});
