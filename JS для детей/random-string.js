
let randomString = '';
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
while (randomString.length < 45) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}

console.log(randomString);