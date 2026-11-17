// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list
import { ListNode } from "../helpers/ListNode.js";

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let dummy = head;

  while (true) {
    if (!dummy.next) break;

    const newVal = gcd(dummy.val, dummy.next.val);
    dummy.next = new ListNode(newVal, dummy.next);

    dummy = dummy.next.next;
  }

  return head;
}

const gcd = (a: number, b: number) => {
  const min = a > b ? b : a;
  const max = a > b ? a : b;

  if (min + 1 === max) return 1;

  const _gcd = (max: number, min: number) => {
    let reminder = max % min;
    if (reminder === 0) return min;

    return _gcd(min, reminder);
  };

  return _gcd(max, min);
};
