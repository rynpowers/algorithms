const { expect } = require('chai');
const maxSubArray = require('./maxSubArray');

describe('maxSubArray', () => {
  it('should return the correct max sub array', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
    expect(maxSubArray([-1, -2, -3, -4, 5, -1])).to.equal(5);
    expect(maxSubArray([-1, 10, -1, -1, 5, -1])).to.equal(13);
    expect(maxSubArray([5, -1, -1, -1, -1, 1000])).to.equal(1001);
  });
  it('should handle negative numbers', () => {
    expect(maxSubArray([-2, -5, -6])).to.equal(-2);
    expect(maxSubArray([-100000])).to.equal(-100000);
  });
});
