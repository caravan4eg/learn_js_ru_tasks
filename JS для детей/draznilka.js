// инициализация массивов
let randomBodyParts = ["глаза", "лицо", "волосы", "голова",];
let randomAdjectives = ["прекрасная", "веселая", "очаровательная", "смешная", "красивая"];
let randomWords = ["луна", "цветок", "бесконечность", "космос", "океан", "звезда"];
let randomAnimals = ["пантеры", "кошки", "рыбки", "русалки"]

// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length )];
// Выбор случайного животного
let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length )];
// Соединяем случайные строки в предложение:
let randomInsult = "У тебя " + randomBodyPart + " еще более " + randomAdjective + " чем " + randomBodyPart + " у " + randomAnimal + "!!!";
console.log(randomInsult);

/*
Задача Соединение чисел
Как с помощью метода join превратить массив [3, 2, 1] в строку
"3 больше, чем 2 больше, чем 1"?*/
// Зададим ммассив
let digits = [3, 2, 1];
// Вывод строки на консоль
console.log(digits.join(" больше, чем "));