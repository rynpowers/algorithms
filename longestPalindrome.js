let str = 'abaxabaxabb';

// const getPalindrome = (start, end, s, p) => {
//   while (start >= 0 && end < s.length) {
//     if (s[start] === s[end]) {
//       start--;
//       end++;
//     } else {
//       break;
//     }
//   }

//   start += 1;
//   end -= 1;

//   if (end - start + 1 > p.length) {
//     return s.substring(start, end + 1);
//   }
//   return p;
// };

// const longestPalindrome = function(s) {
//   let palindrome = '';
//   for (let i = 0; i < s.length; i++) {
//     palindrome = getPalindrome(i, i, s, palindrome);
//     if (i > 0 && s[i] === s[i - 1]) {
//       palindrome = getPalindrome(i - 1, i, s, palindrome);
//     }
//   }

//   return palindrome;
// };

const insertHash = str => {
  const array = [];
  for (let i = 0; i < str.length; i++) {
    array.push('#', str[i]);
  }
  array.push('#');
  return array;
};

const getPalindromeLength = (arr, index, length) => {
  let start = index - length - 1;
  let end = index + length + 1;

  while (arr[start] && arr[end]) {
    if (arr[start--] === arr[end++]) {
      length++;
    } else {
      break;
    }
  }
  return length;
};

var longestPalindrome = function(s) {
  const array = insertHash(s);
  const lengths = Array(array.length).fill(0);

  let center = 0;
  let rightBoundary = 0;
  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const mirror = lengths[2 * center - i];

    if (i < rightBoundary) {
      lengths[i] = Math.min(rightBoundary - i, mirror);
    }

    lengths[i] = getPalindromeLength(array, i, lengths[i]);

    if (i + lengths[i] > rightBoundary) {
      center = i;
      rightBoundary = i + lengths[i];
    }

    if (lengths[maxIndex] < lengths[i]) maxIndex = i;
  }

  const start = maxIndex - lengths[maxIndex];
  const end = maxIndex + lengths[maxIndex];

  return array
    .slice(start, end + 1)
    .filter(cur => cur !== '#')
    .join('');
};

console.log(longestPalindrome(str));
