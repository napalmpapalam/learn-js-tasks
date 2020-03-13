// function work(a, b) {
//   return console.log(a + b);
// }

// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// console.log(work.calls);

// for (let args of work.calls) {
//   console.log(`call: ${args}`);
// }

// =================================

// function act(x) {
//   console.log(x);
// }

// function delay(func, time) {
//   return function() {
//     // let result = func.bind(this, x);
//     // setTimeout(result, time);
//     setTimeout(() => func.apply(this, arguments), time);
//   };
// }

// let act1000 = delay(act, 2000);
// let act1500 = delay(act, 4500);

// act1000('test');
// act1500('second test');

// ===================================

function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let lastCall, context, args, isThrotteled

  function wrapper() => {
    let previousCall = lastCall;
    context = this;
    args = arguments;


    // если время правильное и функция lastRun пустая
    if (!lastCall && ms >= 1000) {
      lastCall = Date.now();
      clearTimeout(lastFunc);
    } else {
      lastFunc = setTimeout(() => {
        if (lastCall - previousCall) {
          func.apply(context, args);
          let previousCall = Date.now();
        }
        // clearTimeout(lastFunc);
      }, 1000);

    }
    return wrapper
  };
}
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
