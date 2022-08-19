const { romanToInt } = require("./index");

describe("Roman to Integer", () => {
  const testCases = [
    {
      args: 'III',
      expectRes: 3,
    },
    {
      args: 'LVIII',
      expectRes: 58,
    },
    {
      args: 'MCMXCIV',
      expectRes: 1994,
    },
  ];

  testCases.map(({ args, expectRes }) => {
    test(`input: s = ${args} | output: ${expectRes}`, () => {
      expect(romanToInt(args)).toBe(expectRes);
    });
  });
});
