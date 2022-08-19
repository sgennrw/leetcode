const { searchInsertPosition } = require("./index");

describe("Search Insert Position", () => {
  const testCases = [
    {
      args: [[1, 3, 5, 6], 0],
      expectRes: 0,
    },
    {
      args: [[1, 3, 5, 6], 5],
      expectRes: 2,
    },
    {
      args: [[1, 3, 5, 6], 2],
      expectRes: 1,
    },
    {
      args: [[1, 3, 5, 6], 7],
      expectRes: 4,
    },
    {
      args: [[1, 3], 4],
      expectRes: 2,
    },
    {
      args: [[1, 3, 5], 3],
      expectRes: 1,
    },
    {
      args: [[1], 0],
      expectRes: 0,
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: nums = [${args[0]}], target = ${args[1]} | output: ${expectRes}`, () => {
      expect(searchInsertPosition(...args)).toBe(expectRes);
    });
  });
});
