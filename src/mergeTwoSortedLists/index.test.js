const { mergeTwoSortedLists } = require('./index')
const { createListNode} = require('../helpers/ListNode')

describe("Merge Two Sorted Lists", () => {
  const testCases = [
    {
      list1: createListNode([1, 2, 4]),
      list2: createListNode([1, 3, 4]),
      expectRes: [1, 1, 2, 3, 4, 4],
    },
    {
      list1: createListNode([1,1,1]),
      list2: createListNode([2]),
      expectRes: [1,1,1,2],
    },
    {
      list1: null,
      list2: null,
      expectRes: null,
    },
    {
      list1: null,
      list2: createListNode([0]),
      expectRes: [0],
    },
    {
      list1: createListNode([1]),
      list2: null,
      expectRes: [1],
    },
    {
      list1: createListNode([-10, -9, -6, -4, 1, 9, 9]),
      list2: createListNode([-5, -3, 0, 7, 8, 8]),
      expectRes: [-10, -9, -6, -5, -4, -3, 0, 1, 7, 8, 8, 9, 9],
    },
    
  ];

  testCases.map(({ list1, list2, expectRes }) => {
    test(`input: list1 = [${list1?.print()}], list2 = [${list2?.print()}] | output: [${expectRes}]`, () => {
      const res = mergeTwoSortedLists(list1, list2)
      expect(res ? res.print() : res).toStrictEqual(expectRes);
    });
  });
});
