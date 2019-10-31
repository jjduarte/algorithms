let magazine = ["two", "times", "three", "is", "not", "four"];
const note = ["two", "times", "two", "is", "four"];

function checkMagazine(magazine, note) {
    if (note.length > magazine.length) {
        return false;
    }

    for (let i=0; i<= note.length -1; i++) {
        if (magazine.indexOf(note[i]) != -1) {
            magazine.splice(magazine.indexOf(note[i]), 1);
        } else {
            console.log(`Magazine is missing ${note[i]}`);
            return "No";
        }
    }
    return "Yes";
    
}

console.log(checkMagazine(magazine, note))






