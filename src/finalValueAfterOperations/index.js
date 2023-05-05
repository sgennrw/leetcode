/** https://leetcode.com/problems/final-value-of-variable-after-performing-operations/ */

const finalValueAfterOperations = (operations) => {
  let res = 0
  operations.forEach(op => {
    if(op.indexOf("+") >= 0) {
      res++
    } else {
      res--
    }
  })

  return res
}

module.exports  = {
  finalValueAfterOperations
}