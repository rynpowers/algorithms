function longestValidParentheses(str) {
  const stack = [-1];
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const top = str[stack[stack.length - 1]];

    if (top === '(' && str[i] === ')') {
      stack.pop();
      let num = i - stack[stack.length - 1];
      max = Math.max(max, num);
    } else {
      stack.push(i);
    }
  }
  return max;
}

console.log(longestValidParentheses('(())()))()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('(()'));
