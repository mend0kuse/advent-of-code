const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    readInput(filename) {
        return fs.readFileSync(path.join(__dirname, '..', filename, 'input.txt'), 'utf8');
    },
    repeat(times, callback) {
        for (const [index, _] of new Array(times).entries()) {
            callback(index);
        }
    },
};
