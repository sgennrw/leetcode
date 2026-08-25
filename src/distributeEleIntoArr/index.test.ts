import { resultArray } from "./index.js";

describe("Distribute Elements Into Two Arrays", () => {
  const testCases = [
    {
      args: [2, 1, 3],
      expectRes: [2, 3, 1],
    },
    {
      args: [5, 4, 3, 8],
      expectRes: [5, 3, 4, 8],
    },
  ];

  describe("solution", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: nums = [${args}] | output: [${expectRes}]`, () => {
        expect(resultArray(args)).toStrictEqual(expectRes);
      });
    });
  });
});
