const generateParenthesis = (n, str = '', open = 0, arr = []) => {
  const close = str.length - open;

  if (str.length === n * 2) arr.push(str);

  if (open < n) generateParenthesis(n, str + '(', open + 1, arr);

  if (close < open) generateParenthesis(n, str + ')', open, arr);

  return arr;
};

let arr = ['((()))', '(()())', '(())()', '()(())', '()()()'];
console.log(generateParenthesis(3).length);
// console.log(generateParenthesis(3).every(paren => arr.includes(paren)));
