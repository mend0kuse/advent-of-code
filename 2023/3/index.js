const { readInput } = require('../../shared/utils.js');

/**
 * Part One solution commented
 */

const input = readInput('2023/3')
    .split('\n')
    .map((row) => row.split(''));

let sum = 0;

const buildNumberWithIndex = (row, pivotIndex) => {
    let result = row[pivotIndex];

    let start = pivotIndex - 1;
    let end = pivotIndex + 1;

    while (!isNaN(row[start])) {
        result = row[start] + result;
        start--;
    }

    while (!isNaN(row[end])) {
        result += row[end];
        end++;
    }

    return [Number(result), start + 1, end - 1];
};

for (const [rowIndex, row] of input.entries()) {
    const nearRowsIndexes = [rowIndex - 1, rowIndex, rowIndex + 1];

    // let numberString = '';

    for (const [columnIndex, symbol] of row.entries()) {
        const nearColumnsIndexes = [columnIndex - 1, columnIndex, columnIndex + 1];

        if (symbol !== '*') {
            continue;
        }

        const nearNumbersByCoords = {};

        for (const i of nearRowsIndexes) {
            for (const j of nearColumnsIndexes) {
                if (!isNaN(input[i]?.[j])) {
                    const [number, start, end] = buildNumberWithIndex(input[i], j);
                    nearNumbersByCoords[i + ',' + start + ',' + end] = number;
                }
            }
        }

        const nearNumbers = Object.values(nearNumbersByCoords);
        if (nearNumbers.length == 2) {
            sum += nearNumbers[0] * nearNumbers[1];
        }

        // if (!isNaN(symbol)) {
        //     numberString += symbol;
        //     if (columnIndex !== row.length - 1) continue;
        // }
        // if (numberString) {
        //     const number = Number(numberString);
        //     const lastSymbolColumnIndex = columnIndex - 1;
        //     const numberCoordsX = numberString.split('').map((_, i) => lastSymbolColumnIndex - i);

        //     for (const i of nearRows) {
        //         for (const j of [
        //             lastSymbolColumnIndex - numberString.length,
        //             ...numberCoordsX,
        //             lastSymbolColumnIndex + 1,
        //         ]) {
        //             if (input[i]?.[j] && !input[i]?.[j].match(/[a-zA-Z0-9.]/)) {
        //                 sum += number;
        //                 numberString = '';
        //                 continue rowLoop;
        //             }
        //         }
        //     }
        //     numberString = '';
        // }
    }
}

console.log(sum);
