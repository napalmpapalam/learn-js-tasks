let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclear() {
  // беру слово
  // привожу к ловер кейсу
  // сортирую
  //
  let map = new Map();

  for (let item of arr) {
    let sorted = item
      .toLowerCase()
      .split('')
      .sort()
      .join();
    map.set(sorted, item);
  }

  return [...map.values()];
}

console.log(aclear(arr));

// 000000000000000000000000000000000000000000000

let map = new Map();

map.set('name', 'John');

let keys = [...map.keys()];

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
console.log(keys.push('more'));
