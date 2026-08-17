export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }

  print() {
    const res = [];
    let node: ListNode | null = this;
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  }
}

export const createListNode = (arr: number[]) => {
  let list = new ListNode();
  let dummy = list;
  let i = 0;
  while (true) {
    dummy.val = arr[i];
    if (i + 1 >= arr.length) break;
    dummy.next = new ListNode(arr[++i]);
    dummy = dummy.next;
  }
  return list;
};
