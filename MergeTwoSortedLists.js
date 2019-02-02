class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const N = (v, n) => new ListNode(v, n);

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  const ohead = head;

  while (l1 && l2) {
    head.next = l1.value < l2.value ? l1 : l2;
    head.next === l1 ? (l1 = l1.next) : (l2 = l2.next);
    head = head.next;
    head.next = null;
  }

  head.next = l1 ? l1 : l2;

  return ohead.next;
};

const getList = list => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
};

let list1 = N(1, N(2, N(4)));
let list2 = N(1, N(3, N(4)));

let list = mergeTwoLists(list1, list2);

getList(list);
