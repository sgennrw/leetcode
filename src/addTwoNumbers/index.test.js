const { addTwoNumbers } = require("./index");
const { createListNode } = require('../helpers/ListNode')

describe("Add Two Numbers", () => {
  const testCases = [
    {
      l1: createListNode([2, 4, 3]),
      l2: createListNode([5, 6, 4]),
      expectRes: [7, 0, 8],
    },
    {
      l1: createListNode([0]),
      l2: createListNode([0]),
      expectRes: [0],
    },
    {
      l1: createListNode([9, 9, 9, 9, 9, 9, 9]),
      l2: createListNode([9, 9, 9, 9]),
      expectRes: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ];

  testCases.map(({ l1, l2, expectRes }) => {
    test(`input: l1 = [${l1.print()}], l2 = [${l2.print()}] | output: [${expectRes}]`, () => {
      expect(addTwoNumbers(l1, l2).print()).toStrictEqual(expectRes);
    });
  });
});
