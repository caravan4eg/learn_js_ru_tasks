let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

let words = ["Планета", "Червяк", "Цветок", "Компьютер"];

console.log(pickRandomWord(words));