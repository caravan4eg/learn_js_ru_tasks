/* Функции-конструкторы или просто конструкторы являются обычными функциями, именовать которые следует с заглавной буквы.
Конструкторы следует вызывать при помощи оператора new. Такой вызов создаёт пустой this в начале выполнения и возвращает заполненный в конце.
 */
/* function User(name) {
    this.name = name;
    this.isAdmin = false;
    }

let user = new User('Vasia');
alert(user.name);
alert(user.isAdmin) */

function Calculator() {
  this.read = function () {
    this.a = +prompt("Input A", 0);
    this.b = +prompt("Input B", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

/* Создаём Accumulator
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
      this.value += +prompt('Input your number', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
