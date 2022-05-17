const { ListNode } = require("./helpers/ListNode");

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
    const currentChar = strs[0][i];
    const isMatched = strs.every((str) => str.charAt(i) === currentChar);
    if (isMatched) prefix += currentChar;
    else break;
  }

  return prefix;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const ans = new ListNode();
  let curAns = ans;
  let sum = 0;

  while (l1 || l2 || sum) {
    const res = sum + (l1?.val || 0) + (l2?.val || 0);
    curAns.next = new ListNode(res % 10)
    sum = Math.floor(res /10)

    l1 = l1?.next
    l2 = l2?.next
    curAns = curAns.next
  }

  return ans.next;

  // Solution for simply array Orz
  // const ans = [];
  // const [base, addition] = l1.length > l2.length ? [l1, l2] : [l2, l1];

  // base.map((num, i) => {
  //   const res =
  //     (+ans[i] || 0) + (i >= addition.length ? num : num + addition[i]);

  //   ans[i] = res % 10;
  //   if (res >= 10) ans[i + 1] = 1;
  // });

  // return ans;
};

module.exports = {
  isPalindrome,
  romanToInt,
  longestCommonPrefix,
  addTwoNumbers,
};
