function toCamelCase(str) {
  let arr = [];
  if (str.includes('-')) arr = str.split('-');
  if (str.includes('_')) arr = str.split('_');

  let newarr = arr.map(item =>
    arr.indexOf(item) != 0
      ? (item = item.slice(0, 1).toUpperCase() + item.slice(1))
      : item
  );

  return newarr.join('');
}
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('the_stealth_warrior'));
