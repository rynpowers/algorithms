// The time complexity of this problem is O(n) becuase we must traverse the
// Array one time to get the max sub array

// space is O(1) because we are not using any extra space to get our answer

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
