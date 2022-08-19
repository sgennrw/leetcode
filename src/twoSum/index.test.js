const { twoSum } = require("./index");

describe("Two Sum", () => {
  const testCases = [
    {
      args: [[2, 7, 11, 15], 9],
      expectRes: [0, 1],
    },
    {
      args: [[3, 2, 4], 6],
      expectRes: [1, 2],
    },
    {
      args: [[3, 3], 6],
      expectRes: [0, 1],
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: nums = [${args[0]}], target = ${args[1]} | output: [${expectRes}]`, () => {
      expect(twoSum(...args)).toStrictEqual(expectRes);
    });
  });
});
