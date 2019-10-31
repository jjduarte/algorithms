let sampleString = 'aaa';
const stringSize = 10;

function repeatedString(s, n) {
    const charToFind = 'a';
    const sampleOccurrencies = sampleString.split(charToFind).length-1;
    const subTotal = Math.floor(stringSize / sampleString.length) * sampleOccurrencies;
    const residualSize = stringSize % sampleString.length;
    const residualString = sampleString.slice(0, residualSize)
    const total = residualString.split(charToFind).length-1 + subTotal;
    return total;
}


console.log(repeatedString(sampleString, stringSize))



