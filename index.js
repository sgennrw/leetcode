const isPalindrome = (x) => {
  return x.toString().split("").reverse().join("") === x.toString();
};

const romanToInt = (s) => {
  const mappings = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let prev = 1001;
  let result = 0;

  s.split("").forEach((str) => {
    const num = mappings[str];

    result += num > prev ? num - prev * 2 : num;

    prev = num;
  });

  return result;
};

const longestCommonPrefix = (strs) => {
  // Solution 1: Brute Force
  // let prefix = strs[0]

  // for (let i = 1; i < strs.length; i++) {
  //   for ([j, s] of [...prefix].entries()) {
  //     if(s !== strs[i][j]) {
  //       prefix = strs[i].substr(0, j)
  //       break;
  //     }
  //   }
  // }

  // return prefix

  // Solution 2
  // if (strs.length === 1) return strs[0];

  // let prefix = strs[0];
  // const str = strs.slice(1).join("/") + "/";

  // let i = 0;
  // let prefixPos = 0;
  // let temp = "";
  // while (i < str.length) {
  //   if (str[i] === prefix[prefixPos++]) {
  //     temp += str[i];
  //   } else {
  //     i = str.indexOf("/", i);
  //   }

  //   if (str[i] === "/") {
  //     prefixPos = 0;
  //     prefix = temp;
  //     temp = "";
  //   }

  //   i++;
  // }

  // return prefix;

  // Solution 3
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i]
    const isMatched = strs.every((str) => str.charAt(i) === currentChar);
    if (isMatched) prefix += currentChar;
    else break;
  }

  return prefix
};

module.exports = {
  isPalindrome,
  romanToInt,
  longestCommonPrefix,
};
