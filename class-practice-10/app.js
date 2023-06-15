// Functions

// ! decl
// const result = sum(13, 10);

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log("[result]", result);

// ! express

// const result = sum(23, 23);

// const sum = function (num1, num2) {
//   return num1 + num2;
// };

// console.log("[result]", result);

// ! anon
// const a = 23;
// const b = 33;

// const result = (function (num1, num2) {
//   return num1 + num2;
// })(a, b);

// console.log("[result]", result);

// ! callback

// function callback() {
//   return "Hello world";
// }

// function call(callback) {
//   return "***" + callback() + "***";
// }

// const result = call(callback);
// console.log("[result]", result);

// ! arrow =>
// const arrowFunction = (a, b) => {
//   return a + b;
// };
// const result = arrowFunction(23, 23);

// console.log("[result]", result);

// const filtredArr = [23, 1, 2, 35, , 18].filter((num) => num > 18);
// console.log("[filtredArr]", filtredArr);

// ! closures

// function round(num) {
//   return Math.round(num);
// }

// function multiplyBy2DivideBy4(roundFunction) {
//   const result = roundFunction(8.2) * 2;

//   return (() => {
//     return result / 4;
//   })();
// }

// const result = multiplyBy2DivideBy4(round);
// console.log("[result]", result);

// ! Factory function

// function Human(name, age) {
//   return {
//     name: name,
//     age: age,
//     signIn: () => console.log("Successfully signed up"),
//   };
// }

// const person1 = Human("Bob", 13);
// person1.signIn();

// console.log("[person1]", person1);

// function Admin(name, age, skills, email, password) {
//   return Object.assign(Human(name, age), {
//     skills,
//     email,
//     password,
//     signIn: () => console.log("Is admin?"),
//   });
// }
// const admin1 = Admin("John", 23, ["HTML", "CSS", "JS"], "k@i.ua", 2323);

// admin1.signIn();

// ************ ARR METHODS

// ! Reduce
// const newArr = [23, 32, 91, 23, 1, 3].reduce((accum, current) => {
//   accum += current;
//   return accum;
// }, 0);

// console.log(newArr);

// ! concat
// const arr = [5, 6, 7].concat([1, 2, 3, 4], [32, 23], [1], [5]);

// ! indexOf
// const arr = ["Dodge", "John", "Bob", "Pop", "Dope", "Bobby"];

// const bobIndex = arr.indexOf("Bob");

// ! lastIndexOf
// const bobIndex1 = arr.lastIndexOf("Bob");
// console.log(bobIndex);
// console.log(bobIndex1);

// ! slice
// const afterBob = arr.slice(bobIndex + 1, bobIndex + 2);
// const beforeBob = arr.slice(bobIndex - 1, bobIndex);

// console.log("[afterBob]", afterBob);
// console.log("[beforeBob]", beforeBob);
// console.log(arr);

// ! includes
// const students = ["Mike", "John", "Bob", "Jack", "Node"];
// console.log(students.includes("Nick"));

// ! splice
// students.splice(2, 1);
// console.log(students);

// ! join
// const strStudents = students.join("***");
// console.log(strStudents);

// ! findIndex
// const john = students.findIndex((obj) => obj === "John");
// console.log("[john]", john);

const students = [
  {
    name: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    salary: "1200$",
  },
  {
    name: "Bob",
    age: 32,
    skills: ["Python", "Jupiter", "NumPy"],
    salary: "1800$",
  },
  {
    name: "Mike",
    age: 123,
    skills: ["Java", "JS"],
    salary: "2200$",
  },
  {
    name: "Bobby",
    age: 321,
    skills: ["Assembly", "Fortran"],
    salary: "500$",
  },
  {
    name: "Jack",
    age: 13,
    skills: ["Python", "Photoshop"],
    salary: "200$",
  },
];
// * 1) Find John and print him to the console
// * 2) Sum of salary into the group
// * 3) Mediana of ages
// * 4) Write function which will be able to print to the console name of current user and his skills through the "*"
// * Example : Jack able to write on Python*Java*JS

function userJohn(students, name) {
	return students.filter(students, name)

};
userJohn("John");