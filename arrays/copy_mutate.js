// Copying methods and mutating methods

const obj = {fruit: 'apple'};

const array = [0, obj, [10] , undefined, 'string', 6];

const map = array.map((x) => x);

// console.log("Array: ", array);
// console.log("Map: ", map);

// obj.fruit = 'banana';
// arr[0]= '1';
// array[3] = [20]

// console.log('\n');
// console.log("Array: ", array);
// console.log("Map: ", map);

// ---------------------------------------------------------

// const arr = [1, 2, 3, 4, 5]
// console.log("Arr:", arr);

// const arr2 = arr.copyWithin(0, 1, arr.length);
// console.log("Arr shallow:", arr2);
// console.log("Arr:", arr);

// const arr3 = arr.slice().copyWithin(0, 1, arr.length);
// console.log("Arr slice:", arr3);
// console.log("Arr:", arr);

// const arr4 = [...arr].copyWithin(0, 1, arr.length);
// console.log("Arr spread:", arr4);
// console.log("Arr:", arr);

