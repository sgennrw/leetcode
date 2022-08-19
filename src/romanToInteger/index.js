/** https://leetcode.com/problems/roman-to-integer/ */

const MAPPINGS = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const romanToInt = (s) => {
  let prev = 1001;
  let result = 0;

  s.split("").forEach((str) => {
    const num = MAPPINGS[str];

    result += num > prev ? num - prev * 2 : num;

    prev = num;
  });

  return result;
};

module.exports = {
  romanToInt,
};
