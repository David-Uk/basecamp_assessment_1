const isValidString = (str) => {
  return typeof str === "string";
};

const replaceSpaces = (str) => {
  if (isValidString(str)) {
    if (str.length === 0) return "Empty string";
    if (/\s/.test(str)) return str.replace(/\s/g, "%20");
    else return "Not white spaces";
  }
};

const val = "Hi my val is Flavio";
console.log(replaceSpaces(val));
