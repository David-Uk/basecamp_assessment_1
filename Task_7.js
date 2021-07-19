const isValidArray = (arr) => {
  return Array.isArray(arr);
};

// const isValidNumber = (num) => {
//   return Number.isNaN(num);
// };

const isPositiveNum = (num) => {
  return Math.sign(num) === 1;
};

const mean = (arr) => {
  return (
    arr.reduce((a, b) => {
      return a + b;
    }) / arr.length
  );
};

const standardDeviation = (arr) => {
  if (!isValidArray(arr)) return "Not an array";
  else if (arr.length === 0) return "Empty array";
  else {
    arr = arr.sort((a, b) => a - b);
    let nums = arr.filter((i) => {
      return isPositiveNum(Number(i));
    });
    let meanArr = mean(nums);
    return Math.sqrt(
      arr.reduce((sq, n) => {
        return sq + Math.pow(n - meanArr, 2);
      }, 0) /
        (data.length - 1)
    );
  }
};

console.log(standardDeviation(["a", "b", 1, 2, 3]));
