// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat('apple');
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// function Obj(name) {
//   this.name = name;
// }

// function Obj2() {}

// Obj2.prototype = {
//   name: 'lol'
// };
// let obj3 = new Obj2();

// console.log(obj3.constructor === Obj2);

// let obj = new Obj('Jon');

// let obj2 = new obj.constructor('sam');

// console.log(obj2.name);
// let boy = {
//   name: 'Vitya',
//   getName() {
//     return console.log(this.name);
//   }
// };

// setTimeout(() => boy.getName(), 1000);

// function f() {
//   console.log('hello');
// }

// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// };

// f.defer(1000);

// Function.prototype.defer = function(ms) {
//   let context = this;
//   return function() {

//     setTimeout(context, ms, ...arguments);
//   };
// };

// function f(a, b) {
//   console.log(`Результат ${a + b}`);
// }

// f.defer(1000)(1, 2);

let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  value: function() {
    return Object.keys(this).join();
  }
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key);
}

alert(dictionary);
