function twoStrings(s1, s2) {

    if(s1.length < 1 || s2.length < 1){
        return 'NO';
    }

    const result =  [...s1].filter(value => [...s2].includes(value));
    return (result.length > 0 ? "YES" : "NO");
    
    // return 'NO';
}

console.log(twoStrings("holly", "sito"));