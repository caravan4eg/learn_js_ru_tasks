/* Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое. */



function multiplyNumeric(menu){
    for (let key in menu) {
        if (typeof(menu[key])=="number") {
            menu[key] *= 2;
            }
        }
    }

menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
alert(`${menu.width}, ${menu.height}, ${menu.title}`);
multiplyNumeric(menu);
alert(`${menu.width}, ${menu.height}, ${menu.title}`);

