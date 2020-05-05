// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// let g = f();
// g();

// function sum(a) {
//   return function(b) {
//     return a + b;
//   };
// }
// console.log(sum(1)(2));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return item => item >= a && item <= b;
// }

// function inArray(elementList) {
//   return item => elementList.indexOf(item) != -1;
//   return item => elementList.includes(item);
// }

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' }
// ];

// function byField(fieldName) {
//   return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// users.sort(byField('name'));
// users.sort(byField('age'));

// console.log(users);

// -----------------------------

const makeArmy = () => {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
};

let army = makeArmy();

army[0]();
army[5]();
