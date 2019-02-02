const { expect } = require('chai');
const combinationSum = require('./combinationSum');

let answers;

describe('combinationSum', () => {
  it('should get all combinations', () => {
    answers = [[2, 2, 3], [7]];
    combinationSum([2, 3, 6, 7], 7).forEach((array, i) => {
      expect(array).to.have.members(answers[i]);
    });

    answers = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
    combinationSum([2, 3, 5], 8).forEach((array, i) => {
      expect(array).to.have.members(answers[i]);
    });

    answers = [
      [2, 2, 2, 2, 2, 2],
      [3, 3, 2, 2, 2],
      [3, 3, 3, 3],
      [6, 2, 2, 2],
      [6, 3, 3],
      [6, 6],
    ];
    combinationSum([2, 3, 6], 12).forEach((array, i) => {
      expect(array).to.have.members(answers[i]);
    });
  });
  it('should return an empty array if there are no sums', () => {
    expect(combinationSum([2, 4, 6], 11).length).to.equal(0);
    expect(combinationSum([], 11).length).to.equal(0);
  });
});
