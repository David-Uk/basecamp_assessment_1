const isArray = (arr) => {
  return Array.isArray(arr);
};

const isPostitiveNumber = (num) => {
  return Math.sign(num) === 1;
};

const sumOfDigits = (arr, num) => {
  if (!isArray(arr)) return "Not an array";
  else if (arr.length === 0) return "Empty array";
  else if (!isPostitiveNumber(num)) return "Invalid number type";
  let filtered = arr.filter((i) => {
    return isPostitiveNumber(i) && i < num;
  });
  filtered = filtered.sort((a, b) => {
    return a - b;
  });
  let numsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let next = i + 1,
      len = arr.length - 1;
    while (next < len) {
      if (arr[i] + arr[next] + arr[len] === num) {
        numsArr.push(arr[i], arr[next], arr[len]);
        return numsArr;
      } else if (arr[i] + arr[next] + arr[len] < num) next++;
      else if (arr[i] + arr[next] + arr[len] > num) len--;
    }
  }
  return -1;
};

console.log(sumOfDigits([1, 2, 3, 4, 5, 6, 7, 8], 6));
