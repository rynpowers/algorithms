var trap = function(height) {
  const left = [0];
  let right = 0;
  let total = 0;

  for (let i = 1; i < height.length; i++) {
    left.push(Math.max(height[i - 1], left[i - 1]));
  }

  for (let j = height.length - 2; j >= 0; j--) {
    right = Math.max(height[j + 1], right);
    let sum = Math.min(left[j], right) - height[j];
    if (sum > 0) total += sum;
  }
  return total;
};

const Input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(Input));
