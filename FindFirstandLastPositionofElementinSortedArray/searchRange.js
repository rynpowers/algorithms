const condLeft1 = (arr, t, m) => arr[m] !== t || arr[m - 1] === t;
const condLeft2 = (arr, t, m) => arr[m] >= t;
const condRight1 = (arr, t, m) => arr[m] !== t || arr[m + 1] === t;
const condRight2 = (arr, t, m) => arr[m] > t;

const binarySearch = (arr, t, fn1, fn2, l = 0, h = arr.length) => {
  let mid = Math.floor((h + l) / 2);

  while (fn1(arr, t, mid) && h - l > 1) {
    fn2(arr, t, mid) ? (h = mid) : (l = mid);
    mid = Math.floor((h + l) / 2);
  }
  return arr[mid] === t ? mid : -1;
};

const searchRange = (arr, t) => [
  binarySearch(arr, t, condLeft1, condLeft2),
  binarySearch(arr, t, condRight1, condRight2),
];

module.exports = {
  binarySearch,
  condLeft1,
  condLeft2,
  condRight1,
  condRight2,
  searchRange,
};
