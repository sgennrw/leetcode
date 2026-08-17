/** https://leetcode.com/problems/final-value-of-variable-after-performing-operations/ */

const finalValueAfterOperations = (operations) => {
  let res = 0;
  operations.forEach((op) => {
    if (op.includes('+')) {
      res++;
    } else {
      res--;
    }
  });

  return res;
};

export { finalValueAfterOperations };
