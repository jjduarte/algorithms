'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {

    let bribes = 0;

    for (let i = 0; i < q.length; i++) {

        if (q[i] - (i + 1) > 2) {
            return 'Too chaotic'
        }

        if (q[i] != i + 1) {
            //one bribe
            if (q[i] == i + 2 && q[i + 1] == i + 1) {
                [q[i], q[i + 1]] = [q[i + 1], q[i]];
                bribes++;
                i++;
                //two bribes
            } else if (q[i] == i + 3 && q[i + 2] == i + 2) {
                [q[i], q[i + 1]] = [q[i + 1], q[i]];
                [q[i + 1], q[i + 2]] = [q[i + 2], q[i + 1]];
                bribes += 2;
                i += 2;
            }
        }

    }
    return bribes;
}
function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));
        minimumBribes(q);
    }
}
