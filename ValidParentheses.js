const isValid = s => {
  const pairs = { '}': '{', ']': '[', ')': '(' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const top = stack[stack.length - 1];

    if (!pairs[cur]) {
      stack.push(cur);
    } else {
      top === pairs[cur] ? stack.pop() : stack.push(cur);
    }
  }
  return !stack.length;
};

console.log(isValid('()') === true);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{[()]}') === true);
