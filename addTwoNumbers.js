class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const N = (v, n) => new ListNode(v, n);

let list = N(2, N(4, N(3)));
let list2 = N(5, N(6, N(4)));

const addTwoNumbers = (l1, l2) => {
  let head = new ListNode();
  let ohead = head;
  let carry = 0;

  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;
    let n = num1 + num2 + carry;

    [carry, head.next] =
      n >= 10 ? [1, new ListNode(n % 10)] : [0, new ListNode(n)];

    head = head.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) head.next = new ListNode(1);

  return ohead.next;
};

console.log(addTwoNumbers(list, list2));
