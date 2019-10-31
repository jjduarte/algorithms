exports.findSmallest = (array) => {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i];
        }        
    }
    return smallest;
}

exports.findSecondSmallest = (array) => {
    let smallest = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER -1;
    
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] < smallest) {
            secondSmallest = smallest;
            smallest = array[i];
        } else if (array[i] < secondSmallest) {
            secondSmallest = array[i];
        }
    }
    return secondSmallest;    
}
// Θ(n log(n))
exports.findKthSmallest = (array, k, l = 0, r = array.length -1) => {
    array.sort((a, b) => {
        return a - b;
    });
    console.log('Final', array)
    return array[k - 1];
}

// Calculate BigO
exports.findKthSmallestOptimized = (array, k, l = 0, r = array.length -1) => {
    if (k > 0 && k <= r - l + 1) {
        let pivotPosition = partition(array, l, r)
        
        if (pivotPosition -l == k -1 ) {
            console.log("final", array, l, r, k);
            return array[pivotPosition];
        }
        // left
        if ( pivotPosition - l > k - 1) {
            return this.findKthSmallestOptimized(array, k, l, pivotPosition - 1) 
        }
        // right
        return this.findKthSmallestOptimized(array, k - pivotPosition + l - 1, pivotPosition + 1, r) 
    } else {
        return Number.MAX_SAFE_INTEGER;
    }
}

partition = (arr, l, r) => {
    let x = arr[r];
    let i = l;

    for (let j = l; j >= l && j < r; j++) {
        if (arr[j] <= x) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i+=1;
        } 
    }
    [arr[i], arr[r]] = [arr[r], arr[i]];
    return i;
}