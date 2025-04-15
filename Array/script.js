// let arr = [1, 2, 3, 4, 5];
// arr.unshift(10)
// console.log(arr); // [ 10, 1, 2, 3, 4, 5 ]

// arr.shift()
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

//spread operator
// const arr3 = [...arr1, ...arr2];
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// //rest operator
// function sum(...args) {
//     console.log(args); // [ 1, 2, 3, 4, 5 ]
// }

// sum(1, 2, 3, 4, 5);

// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr4 = arr3.slice(1, 3) // [ 2, 3 ]
// const arr5 = arr3.slice(-4, -2) // [ 7, 8 ]
// // console.log(arr3);

// console.log(arr3.splice(1, 2)); // [ 2, 3 ]
// console.log(arr3); // [ 1, 4, 5, 6, 7, 8, 9, 10 ]

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr4.fill("random", 2, 5)
console.log(arr4);

const ar5 = [1, [2, 3, 4], 5, [6, [7, 8], 9], 10];
console.log(ar5.flat()); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10 ]
console.log(ar5.flat(3)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]












