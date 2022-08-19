const { isPalindrome } = require("./index");

describe("Palindrome Number", () => {
  const testCases = [
    {
      args: 121,
      expectRes: true,
    },
    {
      args: -121,
      expectRes: false,
    },
    {
      args: 10,
      expectRes: false,
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: x = ${args} | output: ${expectRes}`, () => {
      expect(isPalindrome(args)).toBe(expectRes);
    });
  });
});
