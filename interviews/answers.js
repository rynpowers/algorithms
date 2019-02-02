// ----------------------------------------- Liftoff ---------------------------------------- //

function liftoff(num) {
  if (num === 0) {
    console.log('Liftoff!!');
  } else {
    console.log(num);
    liftoff(num - 1);
  }
}

// ----------------------------------------- MultiDimSum -------------------------------------- //

function multiDimSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    if (Array.isArray(cur)) {
      sum += multiDimSum(cur);
    } else {
      sum += cur;
    }
  }
  return sum;
}

// ------------------------------------------- PairSum -------------------------------------- //

function pairSumNaive(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

function pairSumRatchet(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

function pairSumHash(arr, target) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return true;
    } else {
      hash[target - arr[i]] = true;
    }
  }
  return false;
}

// ------------------------------------------- My Index Of -------------------------------------- //

function myIndexOf(string, searchTerm) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === searchTerm[0]) {
      for (let j = 0; j < searchTerm.length; j++) {
        if (string[j + i] !== searchTerm[j]) {
          break;
        } else if (j === searchTerm.length - 1) {
          return 1;
        }
      }
    }
  }
  return -1;
}
