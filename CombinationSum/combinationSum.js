const combinationSum = (arr, t, i = 0, cur = [], combos = []) => {
  if (t <= 0) {
    if (t === 0) combos.push(cur.slice());
    return combos;
  }

  if (i < arr.length) {
    cur.push(arr[i]);
    combinationSum(arr, t - arr[i], i, cur, combos);
    cur.pop();
    combinationSum(arr, t, i + 1, cur, combos);
  }
  return combos;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2, 3, 6], 12));

module.exports = combinationSum;
