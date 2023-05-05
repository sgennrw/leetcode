/** https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/ */

const minPartitions = (n) => {
  return Math.max(...((n+"").split('')))
}

module.exports = {
  minPartitions
}
