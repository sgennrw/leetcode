const {
  isPalindrome,
  romanToInt,
  longestCommonPrefix,
  addTwoNumbers,
  isParenthesesValid
} = require("./index");
const { createListNode } = require("./helpers/ListNode");

test("isPalindrome", () => {
  expect(isPalindrome(123)).toBe(false);
  expect(isPalindrome(123454321)).toBe(true);
});

test("romanToInt", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix(["dog", "dodo"])).toBe("do");
  expect(longestCommonPrefix(["dog"])).toBe("dog");
  expect(longestCommonPrefix(["", ""])).toBe("");
});

test("addTwoNumbers", () => {
  expect(
    addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4])).print()
  ).toStrictEqual([7, 0, 8]);
  expect(
    addTwoNumbers(createListNode([0]), createListNode([0])).print()
  ).toStrictEqual([0]);
  expect(
    addTwoNumbers(
      createListNode([9, 9, 9, 9, 9, 9, 9]),
      createListNode([9, 9, 9, 9])
    ).print()
  ).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test.only("isParenthesesValid", () => {
  expect(isParenthesesValid("()")).toBe(true)
  expect(isParenthesesValid("()[]{}")).toBe(true)
  expect(isParenthesesValid("(")).toBe(false)
  expect(isParenthesesValid("(]")).toBe(false)
  expect(isParenthesesValid("((((((())]]))))]")).toBe(false)
})