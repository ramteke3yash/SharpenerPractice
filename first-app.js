// const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello from Node.js");

//   ------fat arrow funtions
const add = (a, b) => a + b;
console.log(add(1, 2));

// const addOne = (a) => a + 1;
// console.log(addOne(1));

// const addRandom = () => 6 + 4;
// console.log(addRandom());

const person = {
  name: "Yash",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person.greet();
