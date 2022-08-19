const { solution1, solution2, solution3 } = require("./index");

describe("Longest Common Prefix", () => {
  const testCases = [
    {
      args: ["flower", "flow", "flight"],
      expectRes: "fl",
    },
    {
      args: ["dog", "racecar", "car"],
      expectRes: "",
    },
    {
      args: ["dog", "dodo"],
      expectRes: "do",
    },
    {
      args: ["dog"],
      expectRes: "dog",
    },
    {
      args: ["", ""],
      expectRes: "",
    },
  ];

  describe("solution1", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: x = [${args}] | output: "${expectRes}"`, () => {
        expect(solution1(args)).toBe(expectRes);
      });
    });
  });
  describe("solution2", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: x = [${args}] | output: "${expectRes}"`, () => {
        expect(solution2(args)).toBe(expectRes);
      });
    });
  });
  describe("solution3", () => {
    testCases.map(({ args, expectRes }) => {
      test(`input: x = [${args}] | output: "${expectRes}"`, () => {
        expect(solution3(args)).toBe(expectRes);
      });
    });
  });
});
