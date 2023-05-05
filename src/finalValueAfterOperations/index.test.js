const { finalValueAfterOperations } = require("./index");

describe("Final Value of Variable After Performing Operations", () => {
  const testCases = [
    {
      args: ["--X","X++","X++"],
      expectRes: 1,
    },
    {
      args: ["++X","++X","X++"],
      expectRes: 3,
    },
    {
      args: ["X++","++X","--X","X--"],
      expectRes: 0,
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: n = ${args} | output: ${expectRes}`, () => {
      expect(finalValueAfterOperations(args)).toBe(expectRes);
    });
  });
});
