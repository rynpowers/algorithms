const { expect } = require('chai');
const {
  binarySearch,
  condLeft1,
  condLeft2,
  condRight1,
  condRight2,
  searchRange,
} = require('./searchRange');

const searchFromLeft = (arr, t) => binarySearch(arr, t, condLeft1, condLeft2);

const searchFromRight = (arr, t) =>
  binarySearch(arr, t, condRight1, condRight2);

let answer;

describe('searchFromLeft', () => {
  it('should find left most value', () => {
    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
    expect(answer).to.equal(6);

    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 7, 9, 10], 7);
    expect(answer).to.equal(6);

    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 7, 7, 10], 7);
    expect(answer).to.equal(6);

    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(1);

    answer = searchFromLeft([1, 2, 2, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(1);

    answer = searchFromLeft([1, 2, 2, 2, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(1);

    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    expect(answer).to.equal(3);

    answer = searchFromLeft([1, 2, 3, 4, 4, 6, 7, 8, 9, 10], 4);
    expect(answer).to.equal(3);

    answer = searchFromLeft([1, 2, 3, 4, 4, 4, 7, 8, 9, 10], 4);
    expect(answer).to.equal(3);
  });

  it('should work on input size of 3', () => {
    answer = searchFromLeft([1, 2, 3], 3);
    expect(answer).to.equal(2);

    answer = searchFromLeft([1, 3, 3], 3);
    expect(answer).to.equal(1);

    answer = searchFromLeft([3, 3, 3], 3);
    expect(answer).to.equal(0);
  });

  it('should work on input size of 2', () => {
    answer = searchFromLeft([1, 3], 3);
    expect(answer).to.equal(1);

    answer = searchFromLeft([3, 3], 3);
    expect(answer).to.equal(0);
  });

  it('should work on input size of 1', () => {
    answer = searchFromLeft([1], 1);
    expect(answer).to.equal(0);
  });

  it('should return -1 if not found', () => {
    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1, 2, 3], 0);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1, 2, 3], 4);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1, 2], 4);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1, 2], 0);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1], 0);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([1], 4);
    expect(answer).to.equal(-1);

    answer = searchFromLeft([], 4);
    expect(answer).to.equal(-1);
  });
});

describe('searchFromRight', () => {
  it('should find right most value', () => {
    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
    expect(answer).to.equal(6);

    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 7, 9, 10], 7);
    expect(answer).to.equal(7);

    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 7, 7, 10], 7);
    expect(answer).to.equal(8);

    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(1);

    answer = searchFromRight([1, 2, 2, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(2);

    answer = searchFromRight([1, 2, 2, 2, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.equal(3);

    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    expect(answer).to.equal(3);

    answer = searchFromRight([1, 2, 3, 4, 4, 6, 7, 8, 9, 10], 4);
    expect(answer).to.equal(4);

    answer = searchFromRight([1, 2, 3, 4, 4, 4, 7, 8, 9, 10], 4);
    expect(answer).to.equal(5);
  });

  it('should work on input size of 3', () => {
    answer = searchFromRight([1, 2, 3], 3);
    expect(answer).to.equal(2);

    answer = searchFromRight([1, 1, 3], 1);
    expect(answer).to.equal(1);

    answer = searchFromRight([3, 4, 4], 3);
    expect(answer).to.equal(0);
  });

  it('should work on input size of 2', () => {
    answer = searchFromRight([1, 3], 3);
    expect(answer).to.equal(1);

    answer = searchFromRight([3, 3], 3);
    expect(answer).to.equal(1);

    answer = searchFromRight([3, 4], 3);
    expect(answer).to.equal(0);
  });

  it('should work on input size of 1', () => {
    answer = searchFromRight([1], 1);
    expect(answer).to.equal(0);
  });

  it('should return -1 if not found', () => {
    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1, 2, 3], 0);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1, 2, 3], 4);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1, 2], 4);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1, 2], 0);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1], 0);
    expect(answer).to.equal(-1);

    answer = searchFromRight([1], 4);
    expect(answer).to.equal(-1);

    answer = searchFromRight([], 4);
    expect(answer).to.equal(-1);
  });
});

describe('searchRange', () => {
  it('should find answer in middle of array', () => {
    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10], 8);
    expect(answer).to.include.members([7, 8]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 6, 8, 8, 8, 9, 10], 8);
    expect(answer).to.include.members([6, 8]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 8, 8, 8, 8, 9, 10], 8);
    expect(answer).to.include.members([5, 8]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 2, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.include.members([1, 2]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 2, 2, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.include.members([1, 3]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 2, 2, 2, 6, 7, 8, 9, 10], 2);
    expect(answer).to.include.members([1, 4]);
    expect(answer.length).to.equal(2);
  });

  it('should work from both ends of array', () => {
    answer = searchRange([2, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    expect(answer).to.include.members([0, 1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 10);
    expect(answer).to.include.members([8, 9]);
    expect(answer.length).to.equal(2);
  });

  it('should work on arrays of length 3', () => {
    answer = searchRange([1, 2, 2], 2);
    expect(answer).to.include.members([1, 2]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 1, 2], 1);
    expect(answer).to.include.members([0, 1]);
    expect(answer.length).to.equal(2);
  });

  it('should work on arrays of length 2', () => {
    answer = searchRange([2, 2], 2);
    expect(answer).to.include.members([0, 1]);
    expect(answer.length).to.equal(2);
  });

  it('should work with single input', () => {
    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
    expect(answer).to.include.members([6, 6]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
    expect(answer).to.include.members([9, 9]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
    expect(answer).to.include.members([0, 0]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3], 2);
    expect(answer).to.include.members([1, 1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3], 3);
    expect(answer).to.include.members([2, 2]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3], 1);
    expect(answer).to.include.members([0, 0]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2], 2);
    expect(answer).to.include.members([1, 1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2], 1);
    expect(answer).to.include.members([0, 0]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1], 1);
    expect(answer).to.include.members([0, 0]);
    expect(answer.length).to.equal(2);
  });

  it('should return -1 if not found', () => {
    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3], 4);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2, 3], 0);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2], 3);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1, 2], 0);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1], 2);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([1], 0);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);

    answer = searchRange([], 0);
    expect(answer).to.include.members([-1, -1]);
    expect(answer.length).to.equal(2);
  });
});
