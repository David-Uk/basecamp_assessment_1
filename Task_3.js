const isPrimeNumber = (num) => {
  if (!isPositiveNum(num)) return "Not a positive numnber";
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const isValidArray = (arr) => {
  return Array.isArray(arr);
};

const arrayOfPrimes = (arr) => {
  if (!isValidArray(arr)) return "Wrong data type";
  else if (arr.length === 0) return "Empty array";
  else {
    arr = arr.sort((a, b) => a - b);
    return arr.filter((i) => isPrimeNumber(i));
  }
};

var numArray = [3, 2, 4, 6, 8, 5, 7, 9, 10];

console.log(arrayOfPrimes(numArray));
