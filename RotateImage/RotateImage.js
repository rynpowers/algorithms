const array = [
  [2, 29, 20, 26, 16, 28],
  [12, 27, 9, 25, 13, 21],
  [32, 33, 32, 2, 28, 14],
  [13, 14, 32, 27, 22, 26],
  [33, 1, 20, 7, 21, 7],
  [4, 24, 1, 6, 32, 34],
];

const swap = (matrix, i, j, lo, index) => {
  const temp = matrix[lo][lo + index];
  matrix[lo][lo + index] = matrix[i][j];
  matrix[i][j] = temp;
};

const helper = matrix => {
  let lo = 0;
  let hi = matrix.length - 1;
  while (lo < hi) {
    let length = hi - lo;
    for (let i = 0; i < length; i++) {
      swap(matrix, lo + i, hi, lo, i);
      swap(matrix, hi, hi - i, lo, i);
      swap(matrix, hi - i, lo, lo, i);
    }
    lo++;
    hi--;
  }
  return matrix;
};

console.log(helper(array));
// [
//   [2, 29, 20, 26, 16, 28],
//   [12, 27, 9, 25, 13, 21],
//   [32, 33, 32, 2, 28, 14],
//   [13, 14, 32, 27, 22, 26],
//   [33, 1, 20, 7, 21, 7],
//   [4, 24, 1, 6, 32, 34],
// ]
//   rotate the input matrix in -place such that it becomes:
//   ([4, 33, 13, 32, 12, 2],
//   [24, 1, 14, 33, 27, 29],
//   [1, 20, 32, 32, 9, 20],
//   [6, 7, 27, 2, 25, 26],
//   [32, 21, 22, 28, 13, 16],
//   [34, 7, 26, 14, 21, 28])
// ];
