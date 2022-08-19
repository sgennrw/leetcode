/** https://leetcode.com/problems/palindrome-number/ */

const isPalindrome = (x) => {
  return x.toString().split("").reverse().join("") === x.toString();
};

module.exports = {
  isPalindrome
}