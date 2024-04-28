"use strict";
// There are three main primitives in JavaScript and TypeScript.
let age = 10;
let isEmpty = false;
let username = "Jay";
// ________________________________________________________________
let data = 1;
data = "name"; //no error cause of any type
let std = [];
std.push("first");
std.push("second");
let theme = [1, 2, 3]; // we can only read the value
// theme.push(4);   // error
// Type Inference
// TypeScript can infer the type of an array if it has values.
let num = [1, 2, 3];
num.push(4);
// num.push("five");   // error
// ________________________________________________________________
// sum function
function sum(num1, num2) {
    return num1 + num2;
}
let addition = sum(1, 2);
console.log(addition);
// age verification function
function isLegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
console.log(isLegal(20));
// Delayed Function Execution
function delayed(fn, timeout) {
    setTimeout(() => {
        fn();
    }, timeout * 1000);
}
delayed(() => {
    console.log("Hello World");
}, 5);
const user = {
    fname: "Jay",
    lname: "Yadav",
    age: 12,
    gender: "male",
    verified: true,
};
// Assignment 1
// Problem: Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isLegal1(user) {
    return user.age >= 18;
}
console.log(isLegal1(user));
class Employee {
    constructor(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    speak(word) {
        console.log(word);
    }
}
const emp1 = new Employee("Jay", 22);
emp1.speak("Hello to World from class");
// In summary, choose types for flexibility and advanced type features, and use interfaces for object shapes, contracts, and class implementations, ensuring a consistent and readable codebase.
