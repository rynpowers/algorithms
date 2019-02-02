class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const N = (v, n) => new ListNode(v, n);

const getList = l => {
  while (l) {
    console.log(l.val);
    l = l.next;
  }
};

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode();
  const ohead = head;

  while (l1 && l2) {
    head.next = l1.val < l2.val ? l1 : l2;
    head.next === l1 ? (l1 = l1.next) : (l2 = l2.next);
    head = head.next;
    head.next = null;
  }

  head.next = l1 ? l1 : l2;

  return ohead.next;
};

let list1 = N(1, N(2, N(5)));
let list2 = N(3, N(6, N(9)));
let list3 = N(4, N(7, N(8, N(15))));
let list4 = N(10, N(11, N(16)));
let list5 = N(12, N(13, N(14)));

let list = [list1, list2, list3, list4, list5];

const mergeKLists = arr => {
  if (arr.length < 2) return arr.length ? arr[0] : null;

  while (arr.length > 1) {
    const next = [];
    for (let i = 0; i < arr.length; i += 2) {
      next.push(mergeTwoLists(arr[i], arr[i + 1]));
    }
    arr = next;
  }
  return arr[0];
};

list = mergeKLists(list);
console.log(getList(list));
