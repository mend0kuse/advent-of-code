const { readInput, repeat } = require('../../shared/utils.js');

const input = readInput('2023/4').split('\n');

const copies = {};

for (const [rowIndex, row] of input.entries()) {
    const cardNumber = rowIndex + 1;

    if (!copies[cardNumber]) copies[cardNumber] = 1;

    const [winningNumbersSet, myNumbersSet] = row
        .split(': ')[1]
        .split(' | ')
        .map((numbers) => new Set(numbers.match(/\d+/g)));

    const matches = winningNumbersSet.intersection(myNumbersSet).size;
    if (!matches) continue;

    const cardCopies = copies[cardNumber];
    repeat(matches, (repeatIndex) => {
        const targetCard = cardNumber + repeatIndex + 1;
        if (!copies[targetCard]) copies[targetCard] = 1;

        copies[targetCard] += 1 * cardCopies;
    });
}

console.log(Object.values(copies).reduce((acc, curr) => (acc += curr), 0));
