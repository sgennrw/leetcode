import { minOperations } from "./index.js";

describe("Minimum Operations to Make Array Sum Divisible by K", () => {
  const testCases = [
    {
      nums: [3, 9, 7],
      k: 5,
      expectRes: 4,
    },
    {
      nums: [4, 1, 3],
      k: 4,
      expectRes: 0,
    },
    {
      nums: [3, 2],
      k: 6,
      expectRes: 5,
    },
    {
      nums: [19],
      k: 10,
      expectRes: 9,
    },
  ];

  describe("solution", () => {
    testCases.map(({ nums, k, expectRes }) => {
      test(`input: nums = [${nums}], k = ${k} | output: "${expectRes}"`, () => {
        expect(minOperations(nums, k)).toBe(expectRes);
      });
    });
  });
});
