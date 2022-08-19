/** https://leetcode.com/problems/add-two-numbers/ */

const { ListNode } = require('../helpers/ListNode')

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
    curAns.next = new ListNode(res % 10);
    sum = Math.floor(res / 10);

    l1 = l1?.next;
    l2 = l2?.next;
    curAns = curAns.next;
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
  addTwoNumbers
}