const { isParenthesesValid } = require("./index");

describe("Valid Parentheses", () => {
  const testCases = [
    {
      args: "()",
      expectRes: true,
    },
    {
      args: "()[]{}",
      expectRes: true,
    },
    {
      args: "(",
      expectRes: false,
    },
    {
      args: "(]",
      expectRes: false,
    },
    {
      args: "((((((())]]))))]",
      expectRes: false,
    },
   
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: s = "${args}" | output: ${expectRes}`, () => {
      expect(isParenthesesValid(args)).toBe(expectRes);
    });
  });
});
