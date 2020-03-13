// function printNumbers(from, to) {
//   let count = from;

//   function counter() {
//     return count <= to ? console.log(count++) : clearInterval(interval);
//   }

//   let interval = setInterval(counter, 1000);
//   return interval;
// }

// printNumbers(1, 10);

// через таймаут

function printNumbers(from, to) {
  let count = from;

  function counter() {
    return count <= to ? console.log(count++) : clearTimeout(timeout);
  }

  let timeout = setTimeout(function run() {
    counter();
    setTimeout(run, 1000);
  }, 1000);

  return timeout;
}

printNumbers(1, 10);
