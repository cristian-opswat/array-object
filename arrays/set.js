// // Sets
const mySet = new Set();

mySet.add(1);
mySet.add(2.7);
mySet.add(2.7);
mySet.add({id: 1, name: 'Vandalul'});
mySet.add(NaN);

console.log(mySet);

//-------------------------------------------
// Checking for Duplicate Values
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers]);
console.log(uniqueNumbers);

// //---------------------------------------------
// class User {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
// }

// const users = [
//   new User(1, 'Alice'),
//   new User(2, 'Bob'),
//   new User(1, 'Alice'), // Duplicate user
//   new User(3, 'Charlie'),
// ];

// console.log(users);

// const uniqueUsers = new Set(users.map((user) => user.id));

// console.log([...uniqueUsers]);