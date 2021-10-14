let greetings = function (howManyTimes) {
    console.log("Hello JS world! " + howManyTimes + " times")
}

let drawMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i+1 + " " + whatToDraw);
    }
}
drawMultipleTimes(5, "=^.^=")

let double = function (number) {
    return number * 2;
}
console.log(double(10));