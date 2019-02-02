// const swap = (arr, i, j) => {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// const reverse = (arr, start, num) => {
//   let end = arr.length - 1;
//   let i = start;
//   let next = Infinity;
//   let nextIndex = null;

//   while (start <= end) {
//     if (i <= end) swap(arr, i, end);

//     if (arr[end] > num && arr[end] <= next) {
//       nextIndex = end;
//       next = arr[end];
//     }
//     i++;
//     end--;
//   }
//   return nextIndex;
// };

// var nextPermutation = function(nums) {
//   let i = nums.length - 1;
//   while (nums[i - 1] >= nums[i]) {
//     i--;
//   }
//   const nextIndex = reverse(nums, i, nums[i - 1]);
//   if (nextIndex) swap(nums, i - 1, nextIndex);
//   return nums;
// };

const swap = (arr, i, j) => {
  console.log(arr, i, j);
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(arr);
};

const reverse = (arr, start, num) => {
  let end = arr.length - 1;
  let i = start;

  let swapIndex = null;
  let swapValue = Infinity;

  while (start <= end) {
    // console.log('im stuck', start, end);
    //     check if we need to swap
    if (i < end) swap(arr, i, end);

    //     check if we need to update swapValues
    if (arr[end] > num && arr[end] <= swapValue) {
      swapValue = arr[end];
      swapIndex = end;
    }
    end--;
    i++;
  }
  return swapIndex;
};

var nextPermutation = function(nums) {
  let i = nums.length - 1;

  while (nums[i - 1] >= nums[i]) {
    i--;
  }

  const swapIndex = reverse(nums, i, nums[i - 1]);
  swap(nums, i - 1, swapIndex);

  return nums;
};

const checkAnswer = (input, answer) =>
  nextPermutation(input).every((item, i) => item === answer[i]);

// console.log(checkAnswer([1, 2, 3, 4, 5], [1, 2, 3, 5, 4]));
// console.log(checkAnswer([1, 2, 3, 5, 4], [1, 2, 4, 3, 5]));
// console.log(checkAnswer([1, 2, 5, 4, 3], [1, 3, 2, 4, 5]));
// console.log(checkAnswer([1, 5, 4, 3, 2], [2, 1, 3, 4, 5]));
console.log(checkAnswer([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]));
// console.log(checkAnswer([1, 1, 2], [1, 2, 1]));
// console.log(checkAnswer([1, 2, 1], [2, 1, 1]));
// console.log(checkAnswer([2, 1, 1], [1, 1, 2]));
// console.log(checkAnswer([1, 2], [2, 1]));
// console.log(checkAnswer([1], [1]));
// console.log(checkAnswer([2, 1, 2, 2, 2, 2, 2, 1], [2, 2, 1, 1, 2, 2, 2, 2]));
