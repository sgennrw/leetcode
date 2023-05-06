const { numIdenticalPairSol1, numIdenticalPairSol2 } = require("./index");

describe("Number of Good Pairs", () => {
  const testCases = [
    {
      args: [1, 2, 3, 1, 1, 3],
      expectRes: 4,
    },
    {
      args: [1, 1, 1, 1],
      expectRes: 6,
    },
    {
      args: [1, 2, 3],
      expectRes: 0,
    },
  ];

  describe("Solution 1", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: nums = [${args}] | output: ${expectRes}`, () => {
        expect(numIdenticalPairSol1(args)).toBe(expectRes);
      });
    });
  });

  describe("Solution 2", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: nums = [${args}] | output: ${expectRes}`, () => {
        expect(numIdenticalPairSol2(args)).toBe(expectRes);
      });
    });
  });
});
