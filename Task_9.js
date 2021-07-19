const isValidString = (str) => {
  return typeof str === "string";
};

const isPalindrome = (str) => {
  if (!isValidString(str)) return "Not a string";
  else if (str.length === 0) return "Empty string";
  else return str.split("").reverse().join("") === str;
};

console.log(isPalindrome("mallam"));
