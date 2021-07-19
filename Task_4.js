const isValidString = (str) => {
  return typeof str === "string";
};

const passwordValidator = (str) => {
  if (!isValidString(str)) return "Invalid data type";
  else if (str.length === 0) return "Empty string";
  else {
    let point = 0;
    if (/^\d+$/.test(str)) point += 1;
    else if (/^[0-9a-zA-Z]+$/.test(str)) point += 2;
    else if (/^[0-9a-zA-Z\W]+$/.test(str)) point += 3;
    return point;
  }
};

console.log(passwordValidator("hi*4"));
// console.log(isValidString("str"));
