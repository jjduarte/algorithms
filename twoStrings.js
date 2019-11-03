function twoStrings(s1, s2) {

    if (s1.length < 1 || s2.length > Math.pow(10, 5)){
        return 'NO'
    }

    for (let i=0; i < s1.length; i++ ) {
        if (s2.includes(s1[i])){
            return 'YES'
        }
    }
    return 'NO';
}

console.log(twoStrings("ohlly", "sito"));