const { readInput } = require('../../shared/utils.js');

const input = readInput('2023/4').split('\n');

let sum = 0;
for (const [rowIndex, row] of input.entries()) {
    const [winningNumbers, myNumbers] = row
        .split(': ')[1]
        .split(' | ')
        .map((numbers) => numbers.match(/\d+/g));

    const winningNumbersSet = new Set(winningNumbers);

    let rowPoints = 0;
    for (const number of myNumbers) {
        if (!winningNumbersSet.has(number)) {
            continue;
        }

        if (rowPoints === 0) {
            rowPoints = 1;
        } else {
            rowPoints *= 2;
        }
    }

    sum += rowPoints;
}

console.log(sum);
