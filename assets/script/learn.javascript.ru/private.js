class CoffeeMachine {
  #waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error('Отрицательное количество воды');
    this.#waterAmount = value;
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  constructor(power) {
    this._power = power;
    console.log(`Создана кофеварка, мощность: ${power}`);
  }

  get power() {
    return this._power;
  }
}

let coffeeMachine = new CoffeeMachine(220);
console.log(`Мощность: ${coffeeMachine.power}W`);

coffeeMachine.power = 25;
console.log(coffeeMachine.power);
