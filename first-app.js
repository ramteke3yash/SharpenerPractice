// const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello from Node.js");

//   ------fat arrow funtions
// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const addOne = (a) => a + 1;
// console.log(addOne(1));

// const addRandom = () => 6 + 4;
// console.log(addRandom());

// const person = {
//   name: "Yash",
//   age: 23,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };
// const printName = ({ name }) => {
//   console.log(name);
// };
// printName(person);

// const { name, age } = person;
// console.log(name, age); //destructuring an object with proper naming is done

// const hobbies = ["sports", "reading"];
//  console.log(hobbies.map((hobby) => "hobby: " + hobby));
//  console.log(hobbies);
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);//destructuring an array with any name you want

// const fruits = ["apple", "oranges", "", "mango", "", "lemon"];
// console.log(
//   fruits.map((fruit) => {
//     if (fruit === "") {
//       return "empty string";
//     } else {
//       return fruit;
//     }
//   })
// );
// console.log(fruits);

//---------understanding spread and rest operator--------

// const person = {
//   name: "Yash",
//   age: 23,
//   greet: () => {
//     console.log("Hi, I am" + this.name);
//   },
// };
// const copiedPerson = { ...person };
// console.log(copiedPerson);

// const hobbies = ["sports", "reading"];
// // const copiedArray = hobbies.slice();   // copy of an array
// // const copiedArray = [hobbies];  // now this is an copy of array but it is nested
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// //----rest operator---
// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1, 2, 3, 4));
//-------------the rest operator looks like the spread operator (...3dots) it depends upon how you use it,are you using it to pull elements from an object/array... or are you using it to merge multiple arguments into an array then it's a rest operator
// const obj1 = { key1: 1 };
// const obj2 = { ...obj1 };
// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
//  }
// const obj1 = { key1: 1, key2: 2 };
// const obj2 = { ...obj1, key1: 1000 };

// console.log(obj1);
// console.log(obj2);

// const obj1 = { key1: 1, key2: 2, key3: 1000 };
// const { key1, key3 } = { ...obj1 };
// console.log(key1, key3);
// const arr1 = ["value1", "value2"];
// const [val1, val2] = arr1;
// console.log(val1);

// console.log(val2);

// const obj1 = { key1: 1, key2: 2, key3: 1000 };
// let { key1, key3 } = obj1;
// key1 = 20;
// key3 = 123;
// console.log(obj1.key1, obj1.key3);
// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 3000);
// console.log("d");

// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 3000);
// setTimeout(() => console.log("d"), 0);
// console.log("e");

// function delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }
// async function printSequence() {
//   console.log("a");
//   console.log("b");
//   await delay(3000);
//   console.log("c");
//   await delay(0);
//   console.log("d");
//   console.log("e");
// }
// printSequence();
