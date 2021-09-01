let number = 12348541;


function getDigitsFromString(number) {
    console.log('Digits by getting from string');
    let str = number.toString();
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        console.log(`Next digit - ${str[i]}`);
    }
}

function getDigitsFromDigit(number) {
    console.log('Get digits by dividing by 10:')
    let digit,
        sum = 0;
    while (number) {
        digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
        console.log(`Next digit - ${digit}`);
    }
    console.log(`Sum of digits - ${sum}`);

}

// Reverse given digit
getReversedNumber = function (number) {
    console.log(`Original number - ${number}`);
    console.log(`Reversed number - ${number.toString().split('').reverse().join('')}`);
}
//Check if number is prime/simple
isSimple = function (number) {
    if (number === 2) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

getDigitsFromString(number);
getDigitsFromDigit(number);
getReversedNumber(number);
console.log(`Digit is simple? ${isSimple(number)}`);
