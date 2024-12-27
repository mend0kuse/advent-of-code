const { readInput } = require('../../shared/utils.js');

const MAP = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
};

const input = readInput('2023/1');

let sum = 0;

const findAccuracy = (target, isLast) => {
    let firstIndex = target.length;
    let lastIndex = -1;

    let firstAccuracy = null;
    let lastAccuracy = null;

    for (const [key, value] of Object.entries(MAP)) {
        const index = target.indexOf(key);
        if (index !== -1 && index < firstIndex) {
            firstIndex = index;
            firstAccuracy = value;
        }

        const indexLast = target.lastIndexOf(key);
        if (indexLast !== -1 && indexLast > lastIndex) {
            lastIndex = indexLast;
            lastAccuracy = value;
        }
    }

    return isLast ? lastAccuracy : firstAccuracy;
};

for (const word of input.split('\n')) {
    sum += Number(findAccuracy(word, false) + findAccuracy(word, true));
}

console.log(sum);
