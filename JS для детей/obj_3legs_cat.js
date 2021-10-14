// простой класс
let cat = {
    legs: 3,
    name: "Harmony",
    color: "brown",
};

let scores = {
    frank: 0,
    piter: 0,
    alex: 0,
}
console.log("Очки Франка: ", scores.frank);

scores.frank = 10;
for (let i = 0; i < 10; i++) {
    console.log("Очки Франка: ", scores.frank);
    scores.frank += scores.frank + i;
}

// печатает содержимое массива или слова
function whatWeHaveIn(someThing) {
    for (let i = 0; i < someThing.length; i++) {
        console.log("У нас тут есть " + someThing[i] + ".");
    }
}
let someThing = ["лев", "фламинго", "белый медведь", "удав"];
whatWeHaveIn(someThing);
someThing ="Alex";
whatWeHaveIn(someThing);

// Печатает степени тройки
for (let i = 3; i < 10000; i=i*3) {
    console.log("Степень 3: " + i);
}

