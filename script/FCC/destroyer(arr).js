function destroyer() {
  let [target, ...look] = arguments;
  let result = target.filter((item) => look.indexOf(item) == -1);
  return result;
}

// for (let item of target) {
//   if (look.indexOf(item) == -1) {
//     result.push(item);
//   }
// }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht',
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
);
