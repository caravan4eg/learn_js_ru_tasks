let matrix = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];




function solveSudoku(matrix) {
    function checkRow(matrix, i) {

    }

    //get empty element
    let emptyElementArray = [],
        emptyElementIndex = [],
        emptyElementCandidate = [],
        currentIndex = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                emptyElementIndex = [i, j];
                checkRow(matrix, i)
                for (let k = 0; k <= 9; k++) {
                    //check row
                    if (!matrix[i].includes(k) && matrix[j][k].includes(k)) emptyElementCandidate.push(k);
                }
                emptyElementArray.push([i,j]);
                emptyElementArray[currentIndex].push(emptyElementCandidate);

                currentIndex++;
                emptyElementCandidate = [];
            }

        }
    }
    console.log(emptyElementArray);
    //choose possible candidates

    //checkCol
    //checkRow
    //checkSquare

}

solveSudoku(matrix);