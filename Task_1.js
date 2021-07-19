const isPositiveNum = (num) => {
  return Math.sign(num) === 1;
};

// const isAValidNumber = (num) => {
//   if (Number.isNaN(num)) return false;
//   else return true;
// };
const isValidArray = (arr) => {
  return Array.isArray(arr);
};

const sum_of_numbers = (arr) => {
  if (!isValidArray(arr)) return "Invalid data type";
  else if (arr.length === 0) return "Empty array";
  else {
    let odds = 0,
      evens = 0;
    filtered = arr.filter((i) => {
      return isPositiveNum(i);
    });
    filtered = filtered
      .sort((a, b) => {
        return a - b;
      })
      .map((i) => {
        return parseInt(i);
      });
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i] % 2 === 0) evens = evens + filtered[i];
      else odds = odds + filtered[i];
    }
    return [evens, odds];
  }
};
console.log(sum_of_numbers([1, 2, 3, 4, "a", "5", "6"]));
