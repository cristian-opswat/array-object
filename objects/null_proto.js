// null-prototype objects
const normalObj = {data: 1};

delete normalObj;
console.log(normalObj);

// const nullProtoObj = Object.ecreate(null);

// console.log(`normalObj is: ${normalObj}`); 
// console.log(`nullProtoObj is: ${nullProtoObj}`);

// ---------------------------------------
// normalObj.valueOf(); 

// normalObj.hasOwnProperty("p");
// nullProtoObj.hasOwnProperty("p");


// Object.setPrototypeOf(nullProtoObj, Object.prototype)
// console.log(normalObj.constructor);
// console.log(nullProtoObj.constructor);

// // ---------------------------------------
// const ages = { alice: 18, bob: 27 };

// function hasPerson(name) {
//   return name in ages;
// }

// function getAge(name) {
//   return ages[name];
// }

// console.log(hasPerson("hasOwnProperty"));
// console.log(getAge("toString"));

// console.log(getAge.toString());

// // ---------------------------------------
// const ages = Object.create(null, {
//   alice: { value: 18, enumerable: true },
//   bob: { value: 27, enumerable: true },
// });

// hasPerson("hasOwnProperty");
// getAge("toString");

// // ---------------------------------------
// const user = {};
// const user = Object.create(null, {});

// // A malicious script:
// Object.prototype.authenticated = true;

// // Unexpectedly allowing unauthenticated user to pass through
// if (user.authenticated) {
//   // access confidential data
//   console.log('Stolen');
// } else {
//   console.log('Locked');
// }
