// function clear(el) {
//   return setTimeout((item = el) => item.remove(), 2000);
// }
// clear(div);

//==========================
// const input = prompt('Type input:', `123`);
// function makeLi(str) {
//   let li = document.createElement('li');

//   li.textContent = `${str}`;
//   return div.appendChild(li);
// }
// makeLi(input);

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
function createTree(container, obj) {
  container.append(createTreeDom(obj));
}
let createTreeDom = (obj) => {
  console.log(obj);

  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let item in obj) {
    let li = document.createElement('li');
    li.innerHTML = item;
    console.log(item);

    let childrenUl = createTreeDom(obj[item]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }

  return ul;
};

let container = document.querySelector('#container');
createTree(container, data);
