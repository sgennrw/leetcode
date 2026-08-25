import { lengthOfLongestSubstring } from "./index.js";

describe("Longest Substring Without Repeating Characters", () => {
  const testCases = [
    {
      s: "abcabcbb",

      expectRes: 3,
    },
    {
      s: "bbbbb",

      expectRes: 1,
    },
    {
      s: "pwwkew",

      expectRes: 3,
    },
    {
      s: "mq",
      expectRes: 2,
    },
    {
      s: "1R1T7",
      expectRes: 4,
    },
    {
      s: "",
      expectRes: 0,
    },
  ];

  describe("solution", () => {
    testCases.map(({ s, expectRes }) => {
      test(`input: s = ${s} | output: ${expectRes}`, () => {
        expect(lengthOfLongestSubstring(s)).toBe(expectRes);
      });
    });
  });
});
