// Iterative methods

const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },
};

const people = ['Alice', 'Bob', 'Charlie'];

// Using forEach with thisArg
people.forEach(person.greet, person);



