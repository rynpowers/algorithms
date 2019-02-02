const array = [1, 2, 2, 2, 2, 6, 7, 8, 9, 10];

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [4, 5, 11];

// array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array2 = [4, 5, 11, 13, 14];

// array1 = [1, 3];
// array2 = [2];

// array1 = [1, 1, 1, 1, 1, 1, 1, 2];
// array2 = [3, 4];

// array1 = [1, 3, 8, 9, 15];
// array2 = [7, 11, 18, 19, 21, 25];

array1 = [1, 2];
array2 = [3, 4];

array1 = [];
array2 = [3, 4];

function zip(arr1, arr2) {
  var p1 = 0;
  var p2 = 0;
  var arr = [];
  while (arr1[p1] !== undefined || arr2[p2] !== undefined) {
    if (arr1[p1] !== undefined && arr2[p2] !== undefined) {
      arr1[p1] < arr2[p2] ? arr.push(arr1[p1++]) : arr.push(arr2[p2++]);
    } else {
      arr1[p1] === undefined ? arr.push(arr2[p2++]) : arr.push(arr1[p1++]);
    }
  }
  return arr;
}

var findMedianSortedArraysLinear = function(nums1, nums2) {
  var arr = zip(nums1, nums2);
  var i = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[i] + arr[i - 1]) / 2 : arr[i];
};

const checkForMedian = (index, small, large, size) => {
  const numsNeeded = Math.floor(size / 2) - (index + 1);

  const smallLeft = small[index] || -Infinity;
  const largeLeft = large[numsNeeded - 1] || -Infinity;

  const smallRight = small[index + 1] || Infinity;
  const largeRight = large[numsNeeded] || Infinity;

  const left = Math.max(smallLeft, largeLeft);
  const right = Math.min(smallRight, largeRight);

  if (left <= right) return size % 2 === 0 ? (left + right) / 2 : right;

  return smallLeft < largeRight ? 'lo' : 'hi';
};

const findMedianSortedArrays = (arr1, arr2) => {
  const size = arr1.length + arr2.length;

  const helper = (small, large, l = -1, h = small.length) => {
    const mid = Math.floor((l + h) / 2);
    const result = checkForMedian(mid, small, large, size);

    if (typeof result === 'number') return result;

    return result === 'lo'
      ? helper(small, large, mid, h)
      : helper(small, large, l, mid);
  };

  return arr1.length > arr2.length ? helper(arr2, arr1) : helper(arr1, arr2);
};

const time = fn => {
  let timed = (...args) => {
    let start = new Date();
    let out = fn.apply(this, args);
    let end = new Date();
    console.log('Ran in', end - start, 'ms');
    return out;
  };
  return timed;
};

console.log(findMedianSortedArrays(array1, array2));
