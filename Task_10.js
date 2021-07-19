const highetOccuringCharacter = (str) => {
  let num = 0,
    maxChar = "";
  str.split("").forEach((char) => {
    if (str.split(char).length > num) {
      num = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

console.log(highetOccuringCharacter("Hello"));
