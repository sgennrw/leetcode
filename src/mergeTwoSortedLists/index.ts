/** https://leetcode.com/problems/merge-two-sorted-lists/ */

import { ListNode } from '../helpers/ListNode.js';

const mergeTwoSortedLists = (list1: ListNode | null, list2: ListNode | null) => {
  let ans = new ListNode();
  let temp = ans;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else if (list2) {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  temp.next = list1 || list2;

  return ans.next;
};

export { mergeTwoSortedLists };
