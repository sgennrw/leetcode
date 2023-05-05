const { minPartitions } = require("./index");

describe("Partitioning into minimum number of deci-binary numbers", () => {
  const testCases = [
    {
      args: "32",
      expectRes: 3,
    },
    {
      args: "82734",
      expectRes: 8,
    },
    {
      args: "27346209830709182346",
      expectRes: 9,
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: n = ${args} | output: ${expectRes}`, () => {
      expect(minPartitions(args)).toBe(expectRes);
    });
  });
});
