// игра виселица
// выбор случацйного слова
let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "маша",
    "катюша",
];
let attempt = 10;
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingLetters = word.length;

while (remainingLetters > 0 && attempt > 0) {
// Основной код
// Показываем состояние игры
    alert(answerArray.join(' '));
    alert("Осталось попыток:" + attempt);
// Запрашиваем вариант ответа
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase();
    attempt--;
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else {
        // Обновляем состояние игры
        // Обновляем answerArray и remainingLetters для каждого вхождения угаданной буквы
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (!answerArray.includes(guess))
                    remainingLetters--;
                answerArray[j] = guess;
            }
        }
    }


}
if (answerArray.includes('_')) {
    alert("Не отгадали")
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово: " + word);