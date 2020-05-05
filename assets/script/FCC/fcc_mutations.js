let mutation = arr => {
  let result = true;
  let [target, source] = arr;
  source = [...source.toLowerCase()];
  target = [...target.toLowerCase()];

  for (let char of source) {
    if (target.indexOf(char) != -1) {
      continue;
    }
    result = false;
  }
  return result;
};

console.log(mutation(['hello', 'hey'])); //false
console.log(mutation(['hello', 'Hello'])); //true
console.log(mutation(['voodoo', 'no'])); //false
