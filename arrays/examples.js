// push(): Adds one or more elements to the end of an array and returns the new length of the array.

const fruits = ['apple', 'banana'];
fruits.push('cherry', 'date');
console.log(fruits);


// // pop(): Removes the last element from an array and returns that element.

// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.pop();
// console.log(removedFruit); 

// // shift(): Removes the first element from an array and returns that element.

// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.shift();
// console.log(removedFruit);

// // unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

// const fruits = ['banana', 'cherry'];
// const newLength = fruits.unshift('apple', 'date');
// console.log(fruits);

// // concat(): Combines two or more arrays and returns a new array without modifying the original arrays.

// const fruits1 = ['apple', 'banana'];
// const fruits2 = ['cherry', 'date'];
// const combinedFruits = fruits1.concat(fruits2);
// console.log(combinedFruits);

// // slice(): Returns a shallow copy of a portion of an array into a new array selected from start to end (end not included).

// const numbers = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers.slice(1, 4);
// console.log(slicedNumbers);

// // splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// const fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 1, 'date');
// console.log(fruits);

// // forEach(): Executes a provided function once for each array element.

// const numbers = [1, 2, 3];
// numbers.forEach(function(item) {
//   console.log(item * 2);
// });


// // map(): Creates a new array with the results of calling a provided function on every element in the array.

// const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map(function(item) {
//   return item * 2;
// });
// console.log(doubledNumbers);

// // filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(evenNumbers);
