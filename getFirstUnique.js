function getFirstUnique(str) {
    const element = str[0];

    let nextOccurIndex = str.substring(1).indexOf(element);

    if (nextOccurIndex < 0) {
        return element;
    } else if (nextOccurIndex >= 0) {
        const re = new RegExp(element, "g");
        return getFirstUnique(str.replace(re, '')) || 'no unique';
    }
}

console.log(getFirstUnique('aaaaaacbbbbbbbbx'));
