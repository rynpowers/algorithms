let string = '';

const lengthOfLongestSubstring = s => {
  let start = 0;
  const set = new Set();
  let max = 0;

  for (let end = 0; end < s.length; end++) {
    if (set.has(s[end])) {
      while (s[start] !== s[end]) {
        set.delete(s[start++]);
      }
      start++;
    }
    set.add(s[end]);
    max = Math.max(set.size, max);
  }
  return max;
};

console.log(lengthOfLongestSubstring(string));
