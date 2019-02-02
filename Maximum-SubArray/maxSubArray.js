const maxSubArray = arr => {
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    sum = Math.max(sum + cur, cur);
    max = Math.max(max, sum);
  }
  return max;
};

module.exports = maxSubArray;
