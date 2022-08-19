/** https://leetcode.com/problems/longest-common-prefix/ */

// Solution 1: Brute Force
const solution1 = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for ([j, s] of [...prefix].entries()) {
      if (s !== strs[i][j]) {
        prefix = strs[i].substr(0, j);
        break;
      }
    }
  }

  return prefix;
};

const solution2 = (strs) => {
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  const str = strs.slice(1).join("/") + "/";

  let i = 0;
  let prefixPos = 0;
  let temp = "";
  while (i < str.length) {
    if (str[i] === prefix[prefixPos++]) {
      temp += str[i];
    } else {
      i = str.indexOf("/", i);
    }

    if (str[i] === "/") {
      prefixPos = 0;
      prefix = temp;
      temp = "";
    }

    i++;
  }

  return prefix;
};

const solution3 = (strs) => {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i];
    const isMatched = strs.every((str) => str.charAt(i) === currentChar);
    if (isMatched) prefix += currentChar;
    else break;
  }

  return prefix;
};

module.exports = {
  solution1,
  solution2,
  solution3
}
