/* while (true) {
  if (+prompt("Введите число:") == 10) break;
  else {
    alert("Try once more darling!");
  }
}
alert("Good buy!!!! darling :-)");

let i = 3;

while (i) {
  alert( i-- ); // ! 1
} */

/* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i = 0;
  while (i <3 ) {
    alert( `number ${i}!` );
    i++;
  } */

/*  let num;

  do {
      num = +prompt("Input number more than 100")
  } while (num < 100 && num!=null && num != '' && num != undefined);
 */
/*   Вывести простые числа  ли оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов. */

// Получаем количество чисел которые нам надо вывести
function isSimpleNumber(number) {
  let isSimple = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isSimple = false; // если хотя бы один раз поделилось
      // break;
    }
  }
  return isSimple;
}

let number = 20;
console.log('Hallo daddy');

for (let i = 2; i < number; i++) {
  if (isSimpleNumber(i)) {
    console.log(`Number ${i} is simple and is between '2' and ${number}`);
    console.log(number);
  }
}
