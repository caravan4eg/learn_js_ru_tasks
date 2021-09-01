let matrix = [
    [150, 222, 3, 0],
    [5, 6, 0, 8],
    [0, 0, 33, 0],
    [55, 0, 77, 88]
]
// возвращает суммы элементов в стороке
let sumByRows = function (matrix) {
    let sumResults = [],
        sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum = 0;
        // console.log(matrix[i].join(' '));
        for (let j = 0; j < matrix[i].length; j++) {
            // console.log(matrix[i][j]);
            sum += matrix[i][j];

        }
        sumResults.push(sum);
    }
    return sumResults;
}

let findColumnWithZero = function (matrix) {
    let columnWithZeroIndex = [],
        columnCount = matrix[1].length;

    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                console.log(i);
                columnWithZeroIndex.push(i);
                break;
            }

        }

    }
    return columnWithZeroIndex;
};
// Find avr element of matrix
let findAvg = function (matrix) {
    let sum = 0,
        count = 0;

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            count++;
        }
    }
    avg = matrix.length ? (sum / count) : 0;
    return avg;
}

// console.log(`Columns with Zero: ${findColumnWithZero(matrix).join(' ')}`)
console.log(`Average of all matrix elements: ${findAvg(matrix)}`);