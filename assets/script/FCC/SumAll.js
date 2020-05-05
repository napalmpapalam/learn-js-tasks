function sumAll(arr) {
  if (Array.isArray(arr)) {
    let [start, end] = arr.sort((a, b) => a - b);
    let result = 0,
      n = start;

    console.log(arr);

    while (n < end + 1) {
      result += n;
      n++;
    }
    return result;
  }
  console.log('not array');
}
console.log(sumAll([10, 5]));
console.log(sumAll({ 1: 2 }));
