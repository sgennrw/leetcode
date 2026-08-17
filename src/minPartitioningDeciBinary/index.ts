/** https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/ */

const minPartitions = (n: number | string) => {
  return Math.max(...String(n).split('').map(Number));
};

export { minPartitions };
