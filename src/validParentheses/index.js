/** https://leetcode.com/problems/valid-parentheses/ */

const OPENS = ["(", "[", "{"];
const CLOSES = [")", "]", "}"];

const isParenthesesValid = (s) => {
  const stack = [];

  for (current of s) {
    const isOpen = OPENS.indexOf(current) >= 0;
    if (isOpen) {
      stack.push(current);
    } else {
      const open = stack.pop();
      if (OPENS.indexOf(open) !== CLOSES.indexOf(current)) {
        stack.push("");
        break;
      }
    }
  }

  return !stack.length;
};

module.exports = {
  isParenthesesValid,
};
