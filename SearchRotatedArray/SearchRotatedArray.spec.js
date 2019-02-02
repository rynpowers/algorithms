const { expect } = require('chai');
const { search, findPeak, binarySearch } = require('./SearchInRotatedArray');

describe('Sort in Rotated Array', () => {
  describe('findPeak', () => {
    it('should find peak end of array', () => {
      expect(findPeak([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(9);
      expect(findPeak([10, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(0);
    });

    it('should find a peak in the middle', () => {
      expect(findPeak([4, 5, 6, 7, 8, 9, 10, 1, 2, 3])).to.equal(6);
      expect(findPeak([6, 7, 8, 9, 10, 1, 2, 3, 4, 5])).to.equal(4);
      expect(findPeak([9, 10, 1, 2, 3, 4, 5, 6, 7, 8])).to.equal(1);
      expect(findPeak([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).to.equal(8);
    });

    it('should find a peak of array of length 3', () => {
      expect(findPeak([2, 3, 1])).to.equal(1);
      expect(findPeak([3, 1, 2])).to.equal(0);
      expect(findPeak([1, 2, 3])).to.equal(2);
    });

    it('should find a peak of array length 2', () => {
      expect(findPeak([1, 5])).to.equal(1);
      expect(findPeak([5, 1])).to.equal(0);
    });

    it('should find a peak of array length 1', () => {
      expect(findPeak([5])).to.equal(0);
    });

    it('should find a peak of array length 0', () => {
      expect(findPeak([])).to.equal(-1);
    });
  });

  describe('binarySearch', () => {
    it('should find target on the end of array', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).to.equal(9);
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).to.equal(0);
    });

    it('should find target in the middle of array', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.equal(1);
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).to.equal(5);
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)).to.equal(8);
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).to.equal(6);
    });

    it('should find the target in array length 3', () => {
      expect(binarySearch([1, 2, 3], 2)).to.equal(1);
      expect(binarySearch([1, 2, 3], 1)).to.equal(0);
      expect(binarySearch([1, 2, 3], 3)).to.equal(2);
    });

    it('should find target in array of length 2', () => {
      expect(binarySearch([1, 7], 1)).to.equal(0);
      expect(binarySearch([1, 7], 7)).to.equal(1);
    });

    it('should find target in array of length 1', () => {
      expect(binarySearch([7], 7)).to.equal(0);
    });

    it('should return -1 if target not found', () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).to.equal(-1);
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).to.equal(-1);
      expect(binarySearch([1, 2], 0)).to.equal(-1);
      expect(binarySearch([1, 2], 3)).to.equal(-1);
      expect(binarySearch([1], 3)).to.equal(-1);
      expect(binarySearch([], 3)).to.equal(-1);
    });
  });

  describe('search', () => {
    it('should find target end of array', () => {
      expect(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).to.equal(9);
      expect(search([2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 1)).to.equal(9);
      expect(search([10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).to.equal(1);
      expect(search([10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).to.equal(0);
      expect(search([10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).to.equal(9);
    });

    it('should find a target in the middle', () => {
      expect(search([4, 5, 6, 7, 8, 9, 10, 1, 2, 3], 6)).to.equal(2);
      expect(search([6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 3)).to.equal(7);
      expect(search([9, 10, 1, 2, 3, 4, 5, 6, 7, 8], 3)).to.equal(4);
      expect(search([2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 3)).to.equal(1);
    });

    it('should find a target in array of length 3', () => {
      expect(search([2, 3, 1], 1)).to.equal(2);
      expect(search([3, 1, 2], 1)).to.equal(1);
      expect(search([1, 2, 3], 1)).to.equal(0);
    });

    it('should find a target of array length 2', () => {
      expect(search([1, 5], 5)).to.equal(1);
      expect(search([5, 1], 5)).to.equal(0);
    });

    it('should find a target of array length 1', () => {
      expect(search([5], 5)).to.equal(0);
    });

    it('should return -1 if not found', () => {
      expect(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).to.equal(-1);
      expect(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).to.equal(-1);
      expect(search([4, 5, 6, 7, 8, 9, 10, 1, 3], 2)).to.equal(-1);
      expect(search([4, 5, 7, 8, 9, 10, 1, 2, 3], 6)).to.equal(-1);
      expect(search([5, 7, 4], 8)).to.equal(-1);
      expect(search([5, 7, 4], 0)).to.equal(-1);
      expect(search([5, 7], 8)).to.equal(-1);
      expect(search([5, 7], 6)).to.equal(-1);
      expect(search([5, 7], 0)).to.equal(-1);
      expect(search([7], 8)).to.equal(-1);
      expect(search([], 8)).to.equal(-1);
    });
  });
});
