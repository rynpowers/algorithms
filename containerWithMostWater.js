function maxArea(a, start = 0, end = a.length - 1) {
  let area = 0;

  while (start < end) {
    const side = Math.min(a[start], a[end]);
    area = Math.max(area, (end - start) * side);
    a[start] < a[end] ? start++ : end--;
  }
  return area;
}

let array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let ans = 49;
console.log(maxArea(array));
