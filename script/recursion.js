// Вычислить сумму чисел до данного

function sumTo(n) {
  // let sum = 0;
  // for (let i = 0; i <= n; i++) {
  //   sum += i;
  // }
  // return sum;
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// Факториал

function factorial(n) {
  return n == 0 ? 1 : n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));
// console.log(factorial(0));

factorial(6);

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList() {
  // let tmp = list;
  // while (tmp) {
  //   console.log(tmp.value);
  //   tmp = tmp.next;
  // }
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);
