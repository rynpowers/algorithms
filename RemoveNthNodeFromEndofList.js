function ListNode(value, next = null) {
  this.value = value;
  this.next = next;
}

const N = (v, n) => new Node(v, n);

let list = N(1, N(2, N(3, N(4, N(5)))));

const createStick = (node, n) => {
  while (n--) {
    node = node.next;
  }
  return node;
};

var removeNthFromEnd = function(head, n) {
  let prev = new Node(null, head);
  let ohead = prev;
  let stick = createStick(head, n);
  while (stick) {
    stick = stick.next;
    head = head.next;
    prev = prev.next;
  }
  prev.next = head.next;
  return ohead.next;
};

// console.log(removeNthFromEnd(list, 2));
// list = N(1);
// console.log(removeNthFromEnd(list, 1));
list = N(1, N(2));
console.log(removeNthFromEnd(list, 2));
