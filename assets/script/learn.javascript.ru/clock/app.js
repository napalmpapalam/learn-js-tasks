const buttonStart = document.querySelector('.btn-start'),
  buttonStop = document.querySelector('.btn-stop'),
  hours = document.querySelector('.hours'),
  minutes = hours.nextElementSibling,
  seconds = minutes.nextElementSibling;

function startCloak() {
  let date = new Date(),
    arr = [date.getHours(), date.getMinutes(), date.getSeconds()];

  let [hr, min, sec] = arr;

  function renderTime() {
    if (hr < 10) {
      hours.textContent = `0${hr}`;
    } else {
      hours.textContent = hr;
    }

    if (min < 10) {
      minutes.textContent = `0${min}`;
    } else {
      minutes.textContent = min;
    }

    if (sec < 10) {
      seconds.textContent = `0${sec}`;
    } else {
      seconds.textContent = sec;
    }
  }

  renderTime();
}

startCloak();
let interval = setInterval(startCloak, 1000);

buttonStart.addEventListener('click', () => {
  startCloak();
  interval = setInterval(startCloak, 1000);
});
buttonStop.addEventListener('click', () => clearInterval(interval));
