const { readInput } = require('../../shared/utils.js');
const input = readInput('2023/2').split('\n');

/**
 * Part One solution commented
 */

let sum = 0;
const maximumPossibleEntries = Object.entries({ red: 12, green: 13, blue: 14 });

parent: for (const rawLine of input) {
    const gameId = Number(/\d+/.exec(rawLine)[0]);
    const rawSets = rawLine.split(': ')[1].split('; ');

    const minimumRequiredForGame = { red: 0, green: 0, blue: 0 };

    for (const rawSet of rawSets) {
        const setStats = { red: 0, green: 0, blue: 0 };

        for (const pair of rawSet.split(', ')) {
            const [count, color] = pair.split(' ');
            setStats[color] += Number(count);
        }

        // for (const [color, maxCount] of maximumPossibleEntries) {
        //     if (setStats[color] > maxCount) {
        //         continue parent;
        //     }
        // }

        for (const [color, count] of Object.entries(setStats)) {
            if (minimumRequiredForGame[color] < count) {
                minimumRequiredForGame[color] = count;
            }
        }
    }

    // sum += gameId;
    sum += Object.values(minimumRequiredForGame).reduce((acc, curr) => (acc *= curr), 1);
}

console.log(sum);
