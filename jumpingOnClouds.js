function jumpingOnClouds(c) {
    var jumps = 0;
    for (var i = 0; i < c.length -1; i++ ){
        if(i+2 <= c.length && c[i+2] == 0) {
            jumps++;
            i++;
        } else if (c[i+1] == 0) {
            jumps++;
        } else {
            jumps++;
            i++;
        }
    }
    return jumps;

}

module.exports = {
    jumpingOnClouds,
}

// console.log(jumpingOnClouds([0,0,0,0,1,0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));