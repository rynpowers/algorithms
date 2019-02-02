var permute = function(nums, arr = [], set = []) {
  if (!nums.length) {
    set.push([...arr]);
  }

  for (let i = 0; i < nums.length; i++) {
    let nextNums = nums.filter((num, index) => i !== index);
    arr.push(nums[i]);
    permute(nextNums, arr, set);
    arr.pop();
  }

  return set;
};

console.log(permute([1, 2, 3]));
