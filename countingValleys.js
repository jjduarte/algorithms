const steps = 12;
const map = 'DDUUDDUDUUUD';

function countingValleys(n, s) {
    let seaLevel = 0;
    let nValleys = 0;
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] == 'U') {
            seaLevel++;
        } else if (s[i] == 'D'){
            seaLevel--;
        }
        if (seaLevel == 0 && s[i] == 'U'){
            nValleys++;
        }

    }

    return nValleys;
}


console.log(`Garry entered into ${countingValleys(steps, map)} valleys`);