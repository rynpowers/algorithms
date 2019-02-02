const arr = ['eat', 'tea', 'tan', 'atttte', 'nat', 'bat', '', ''];

const createHashKey = () => {
  const keys = 'abcdefghijklmnopqrstuvwxyz';
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = i;
  }
  return obj;
};

const hashString = (map, string) => {
  const hash = Array(26).fill(0);

  for (let i = 0; i < string.length; i++) {
    const index = map[string[i]];
    arr[index] = arr[index] + 1;
  }

  return hash.join('');
};

const groupAnagrams = strings => {
  const map = createHashKey();
  const obj = {};

  strings.forEach(item => {
    const hash = hashString(map, item);
    obj[hash] ? obj[hash].push(item) : (obj[hash] = [item]);
  });

  return Object.keys(obj).reduce((a, v) => {
    a.push(obj[v]);
    return a;
  }, []);
};

console.log(groupAnagrams(arr));
