function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append('Hello, world!');
  });
}

function showCircle(cx, cy, radius, callback) {
  const circle = document.createElement('div');
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = cx + 'px';
  circle.style.left = cy + 'px';
  circle.className = 'circle';
  document.body.append(circle);

  setTimeout(() => {
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
    circle.addEventListener('transitionend', function handler() {
      circle.removeEventListener('transitionend', handler);
      callback(circle);
    });
  }, 0);
}
