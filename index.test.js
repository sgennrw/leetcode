const { isPalindrome, romanToInt } = require("./index");

test("isPalindrome", () => {
  expect(isPalindrome(123)).toBe(false);
  expect(isPalindrome(123454321)).toBe(true);
});

test("romanToInt", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
