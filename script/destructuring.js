let user = {
  name: 'John',
  years: 30
};

let { name, years, isAdmin = false } = user;

// console.log(name, years, isAdmin);

// ---------------------------------------------------

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary() {
  let max = 0,
    maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

// console.log(topSalary(salaries));
