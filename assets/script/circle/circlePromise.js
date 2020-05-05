function go() {
  showCircle(150, 150, 100).then(circle => {
    circle.classList.add('message-ball');
    circle.append('Hello, world!');
  });
}

function showCircle(cx, cy, radius) {
  const circle = document.createElement('div');
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = cx + 'px';
  circle.style.left = cy + 'px';
  circle.className = 'circle';
  document.body.append(circle);

  return new Promise(resolve => {
    setTimeout(() => {
      circle.style.width = radius * 2 + 'px';
      circle.style.height = radius * 2 + 'px';
      circle.addEventListener('transitionend', function handler() {
        circle.removeEventListener('transitionend', handler);
        resolve(circle);
      });
    }, 0);
  });
}

// TODO: get job

fn;
