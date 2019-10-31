const d = 5;
const a = [1,2,3,4,5]

function rotLeft(a, d) {
    for (let j = 0; j < d; j++) {
        a.push(a.shift(1));
    }
    return a;
}

console.log(rotLeft(a, d))