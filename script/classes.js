// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: 'h:m:s' });

// // clock.start();

// class Animal {
//   static type = 'ANIMAL';

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log(`I am Animal`);
//   }
// }

// class Cat extends Animal {
//   static type = 'CAT';

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log(`I am Cat`);
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: 'black'
// });


class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)    
  }  

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
    constructor(options) {
      super(options.selector)

      this.$el.style.width = this.$el.style.height = options.size + 'px'
      this.$el.style.background = options.color
    }
}

class Circle extends Box {
    constructor(options) {
      super(options)

      this.$el.style.borderRadius = '50%'
    }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red'
})

const box2 = new Box({
  selector: '#box2',
  size: 120,
  color: 'blue'
})

const circle = new Circle({
  selector: "#circle1",
  size: 100,
  color: 'pink'
})


