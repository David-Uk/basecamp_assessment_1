const numOfThrees = (num) => {
  let arr = [];
  if (num < 3) return "Not high enough";
  for (let i = 0; i < num; i++) {
    if (("" + i).indexOf(3) > -1) arr.push(i);
  }
  return { count: arr.length, numbers: arr };
};

console.log(numOfThrees(34));
