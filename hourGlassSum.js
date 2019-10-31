const arr = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]];


function hourglassSum(arr) {
    // i, j coordenates
    let a = [0, 0];
    let b = [0, 1];
    let c = [0, 2];
    let d = [1, 1];
    let e = [2, 0];
    let f = [2, 1];
    let g = [2, 2];

    let sum = 0;
    let totals = [];
    for (let i = 0; i < 4; i++) {
       for (let j = 0; j < 4; j++) {
        sum += arr[a[0]][a[1]];
        sum += arr[b[0]][b[1]];
        sum += arr[c[0]][c[1]];
        sum += arr[d[0]][d[1]];
        sum += arr[e[0]][e[1]];
        sum += arr[f[0]][f[1]];
        sum += arr[g[0]][g[1]];
        totals.push(sum);
        sum = 0;
        a[1]++;
        b[1]++;
        c[1]++;
        d[1]++;
        e[1]++;
        f[1]++;
        g[1]++;
       }
        a[0]++;
        b[0]++;
        c[0]++;
        d[0]++;
        e[0]++;
        f[0]++;
        g[0]++;
        a[1] -= 4;
        b[1] -= 4;
        c[1] -= 4;
        d[1] -= 4;
        e[1] -= 4;
        f[1] -= 4;
        g[1] -= 4;

    }
    return Math.max(...totals);

}


function printMatrix(arrMulti) {
    let line = '';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            line += arr[i][j] + " ";
        }
        console.log(line);
        line = '';
        console.log(" ");
    }   
}


console.log(`The hourglass with the maximum sum is: ${hourglassSum(arr)}`)