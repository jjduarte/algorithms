//             1  2  3  4  5
const queue = [2, 5, 1, 3, 4];

function minimumBribes(q) {

    let bribes = 0;

    for (let i = 0; i < q.length; i++) {

        if (q[i] - (i+1) > 2) {
            return 'Too chaotic'
        }

        if (q[i] != i+1) {
            //one bribe
            if (q[i] == i+2 && q[i+1] == i+1){
                [q[i], q[i+1]] = [q[i+1], q[i]];
                bribes++;
                i++;
                //two bribes
            } else if (q[i] == i+3 && q[i+2] == i+2) {
                [q[i], q[i+1]] = [q[i+1], q[i]];
                [q[i+1], q[i+2]] = [q[i+2], q[i+1]];
                bribes += 2;
                i += 2;
            }
        }
        
    }
    return bribes;
}

console.log(minimumBribes(queue));
