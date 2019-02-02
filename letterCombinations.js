const letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'i'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits) {
  let combinations = [...letters[digits[0]]];

  for (let i = 1; i < digits.length; i++) {
    const updatedCombinations = [];

    combinations.forEach(combination => {
      letters[digits[i]].forEach(letter => {
        updatedCombinations.push(combination + letter);
      });
    });

    combinations = updatedCombinations;
  }

  return combinations;
}

let answer = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
console.log(letterCombinations('234'));
