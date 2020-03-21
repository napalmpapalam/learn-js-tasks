let startTimer = Date.now();
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log(`${(Date.now() - startTimer).toFixed(2)} ms`);
    }, ms);
  });
}

delay(3000).then(() => console.log('executed since 3 seconds'));
