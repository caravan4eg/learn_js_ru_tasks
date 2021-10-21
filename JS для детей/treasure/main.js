// Получить случайное число от 0 до size-1
let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
// Формируем сообщение, насколько близоко к цели
let getDistanceHint = function (clicks, distance) {
  if (distance < 10) {
    return "Обожжешься! Осталось кликов: " + clicks;
  } else if (distance < 20) {
    return "Очень горячо! Осталось кликов: " + clicks;
  } else if (distance < 40) {
    return "Горячо! Осталось кликов: " + clicks;
  } else if (distance < 80) {
    return "Тепло. Осталось кликов: " + clicks;
  } else if (distance < 160) {
    return "Холодно. Осталось кликов: " + clicks;
  } else if (distance < 320) {
    return "Очень холодно! Осталось кликов: " + clicks;
  } else {
    return "Замерзнешь! Осталось кликов: " + clicks;
  }
};
// инициализация
let clicks = 50;
let width = 400;
let height = 400;
let wonGame = false;

// координаты клада
let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
// обрабботка кликов
$("#map").click(function (event) {
    clicks--;
    $("#distance").text("Осталось кликов: " + clicks);
    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    let distanceHint = getDistanceHint(clicks, distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8 && clicks > 0) {
    alert("Клад найден! Сделано кликов: " + clicks);
    $("#distance").text("Клад найден! Сделано кликов: " + clicks);
    }
    if (clicks === 0) {
        alert("Клад не найден! Осталось кликов: " + clicks);
    }
    });

