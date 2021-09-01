let array = [-1, 20, 30, -100, 200, -201];

let arrayMin = function (array) {
    let min = array.length ? array[0] : 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];

    }

    return  min;

}

console.log(arrayMin(array));