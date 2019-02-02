let nums = [2, 7, 11, 15];
let target = 9;

const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const curNumPair = target - nums[i];

    if (obj[curNum] !== undefined) {
      return [obj[curNum], i];
    } else {
      obj[curNumPair] = i;
    }
  }
};

console.log(twoSum(nums, target));
