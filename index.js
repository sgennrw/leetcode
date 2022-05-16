const isPalindrome = (x) => {
  return x.toString().split("").reverse().join("") === x.toString();
};

const romanToInt = (s) => {
  const mappings = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let prev = 1001
  let result = 0

  s.split('').forEach(str => {
    const num = mappings[str]
  
    result += (num > prev) ? (num - (prev * 2)) :  num

    prev = num;
  })

  return result
};

module.exports = {
  isPalindrome,
  romanToInt,
};
