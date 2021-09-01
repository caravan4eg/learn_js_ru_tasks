
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {

    return Object.keys(obj).length === 0;
    // если список ключе й объекта пустой, значит он пустой
}


function isEmpty2(obj) {
    for (const objKey in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        console.log(objKey);
        return false;
    }

    return true;
  }
alert(isEmpty());
