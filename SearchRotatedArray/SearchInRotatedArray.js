const findPeak = (arr, l = 0, h = arr.length) => {
  let mid = Math.floor((l + h) / 2);
  while (arr[mid - 1] > arr[mid] || arr[mid + 1] > arr[mid]) {
    arr[mid] < arr[0] ? (h = mid) : (l = mid);
    mid = Math.floor((l + h) / 2);
  }
  return arr.length ? mid : -1;
};

const binarySearch = (arr, t, l = 0, h = arr.length) => {
  let mid = Math.floor((l + h) / 2);

  while (arr[mid] !== t && Math.abs(h - l) > 1) {
    arr[mid] < t ? (l = mid) : (h = mid);
    mid = Math.floor((l + h) / 2);
  }
  return arr[mid] === t ? mid : -1;
};

const search = (arr, t) => {
  const peak = findPeak(arr);
  return t >= arr[0]
    ? binarySearch(arr, t, 0, peak + 1)
    : binarySearch(arr, t, peak, arr.length);
};

module.exports = {
  search,
  findPeak,
  binarySearch,
};
