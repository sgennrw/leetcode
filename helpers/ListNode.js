class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  print() {
    const res = []
    let node = this
    while(node) {
      res.push(node.val)
      node = node.next
    }
    return res
  }
}

const createListNode = (arr) => {
  let list = new ListNode()
  let dummy = list
  let i = 0
  while (true) {
    dummy.val = arr[i]
    if(i + 1 >= arr.length) break;
    dummy.next = new ListNode(arr[++i])
    dummy = dummy.next
  }
  return list
}

module.exports = {
  ListNode,
  createListNode
}