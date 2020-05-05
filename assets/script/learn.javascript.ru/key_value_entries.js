let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries() {
  let salariesArray = [...Object.values(salaries)];
  return salariesArray.reduce((acc, item) => acc + item, 0);
}

console.log(sumSalaries(salaries));

// =================================================================

let user = {
  name: 'John',
  age: 30
};

function count() {
  return [...Object.keys(user)].length;
}

alert(count(user)); // 2
