const isPositiveNum = (num) => {
  return Math.sign(num) === 1;
};

const isPrimeNumber = (num) => {
  if (!isPositiveNum(num)) return "Not a positive numnber";
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

console.log(isPrimeNumber(2));
