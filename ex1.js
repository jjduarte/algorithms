function sockMerchant(n, arr) {
    let totalPairs = 0;
    while ( arr.length != 0){
       if (arr.slice(1).includes(arr[0])) {
           var indexSegundo = arr.slice(1).indexOf(arr[0]);
           arr.splice(0, 1);
           arr.splice(indexSegundo, 1);
           totalPairs++;
       } else {
        arr.splice(0, 1);
       }
    }
    return totalPairs;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
// console.log(sockMerchant(20, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3, 1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// console.log(sockMerchant(3, [ 10, 20, 10, 10, 20, 20]));