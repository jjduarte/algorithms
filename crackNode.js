// 1. what is an error-first callback

myCallback = (err, data) => {
    if (err) throw err;

    console.log(data);
}

myFunction = (callback, isError) => {
    if(isError) {
        callback(new Error("This is an error"), 'Error')
    }
    callback(null, 'Got it');
    
}

// myFunction(myCallback, true);

// 2. how can you avoid callback-hells 
// using promises. Avoid using nasted async calls


// 3. what are promises
// A promise is an object that may produce a single value some time in the future. Promises are objects that will be fulfilled, rejected, or pending assyncronously. 
// let obj = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         return reject('teste');
//     }, 3000)
// })

// console.log(obj)
// obj.then( (result) => {
//     console.log(result);
//     console.log(ob)
// }).catch((err) => {
//     console.log(err);
// })

// 4. what tools can be used to assure consistent styles? Why is it important?
//lints

// 5. When you should npm and when you should yarn?
// 6. What is your favorite HTTP framework and why? 

// ############################ LEVEL 5/10 QUESTIONS

//trasform this object prop values into an array 
// let x = {
//     a: 1,
//     b: 2,
// }
// const arr = Object.values(x);
// console.log(arr);

// transform "hi" into "ih"
// let x = 'hi'
// console.log(x.split('').reverse().join(''));

//print both A and B

// const obj = {
//     a: 1,
//     b: 2, 
//     getA() {
//         console.log(this.a)
//         return this;
//     },
//     getB() {
//         console.log(this.b)
//     }
// };

// obj.getA().getB();



// ############################ LEVEL 7/10 QUESTIONS

//create a function to print array like [1,2].print(); //1,2
//create a prototype for print
// Array.prototype.print = function() {
//     console.log(`${this.toString()}`);
// };


//sum all of them

let array = [1,2,5,7];

// console.log(array.reduce((a, b) => {return a+b}));

//make this works add(1, 2) or add(1)(2);

let add = (a, b) => {
    if (a && b) {
        return a + b;
    } else {
        return add = function(num){
            return a + num;
        };

        
    }
}
// console.log(add(1,2) === add(1)(2))


// find the missing value in the array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

let len = arr.length + 2;
console.log(len)
let total = len * (len - 1) /2;
let arrTotal = arr.reduce((a, b) => a+b);

console.log(`The missing number is ${total - arrTotal}`)