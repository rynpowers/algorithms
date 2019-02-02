const moveIndex = (index, arr, value, dec) => {
  while (value === arr[index]) {
    dec ? index-- : index++;
  }
  return index;
};

const threeSum = arr => {
  const sums = [];
  let i = 0;

  arr.sort((a, b) => a - b);

  while (i < arr.length - 2) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];

      if (sum === 0) {
        sums.push([arr[i], arr[j], arr[k]]);
        j = moveIndex(j, arr, arr[j]);
        k = moveIndex(k, arr, arr[k], true);
      } else {
        sum > 0 ? k-- : j++;
      }
    }
    i = arr[i] === arr[i + 1] ? moveIndex(i, arr, arr[i]) : i + 1;
  }
  return sums;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); //[[-1, 0, 1], [-1, -1, 2]]
nums = [-1, -1, 2];
console.log(threeSum(nums)); //[[-1, -1, 2]]
nums = [0, 0, 0, 0, 0, 0, 0];
console.log(threeSum(nums)); //[[0, 0, 0]]
nums = [-1, -1, -1, -1, -1, 2, 2];
console.log(threeSum(nums)); //[[0, 0, 0]]
nums = [1, -1, -1, 0];
console.log(threeSum(nums)); //[[-1, 0, 1]]
nums = [3, 0, -2, -1, 1, 2];
console.log(threeSum(nums)); //[[-2,-1,3],[-2,0,2],[-1,0,1]]
