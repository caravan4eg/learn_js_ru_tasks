function makeAnimalsBeautifull(animals) {
    console.log("У нас живут:")
    for (let i = 0; i < animals.length; i++) {
        animals[i] = animals[i] + " - прекрасное животное!";
            console.log(animals[i]);
    }

}
let animals = ["Кот", "Сом", "Лемур", "Комодский варан"];
makeAnimalsBeautifull(animals);
