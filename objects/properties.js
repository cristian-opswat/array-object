const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(o.a); // 1

console.log(o.b); // 2

console.log(o.c); // 4

console.log(o.d); // undefined
