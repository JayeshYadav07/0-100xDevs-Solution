// There are three main primitives in JavaScript and TypeScript.

let age: number = 10;

let isEmpty: boolean = false;

let username: string = "Jay";

// ________________________________________________________________

let data: any = 1;
data = "name"; //no error cause of any type

let std: string[] = [];
std.push("first");
std.push("second");

let theme: readonly number[] = [1, 2, 3]; // we can only read the value
// theme.push(4);   // error

// Type Inference
// TypeScript can infer the type of an array if it has values.
let num = [1, 2, 3];
num.push(4);
// num.push("five");   // error

// ________________________________________________________________

// sum function
function sum(num1: number, num2: number): number {
    return num1 + num2;
}

let addition: number = sum(1, 2);

console.log(addition);

// age verification function
function isLegal(age: number): boolean {
    if (age >= 18) return true;
    else return false;
}

console.log(isLegal(20));

// Delayed Function Execution
function delayed(fn: () => void, timeout: number): void {
    setTimeout(() => {
        fn();
    }, timeout * 1000);
}

delayed(() => {
    console.log("Hello World");
}, 5);

// ________________________________________________________________

// interface :  Is a way to define a contract for the shape of an object.

interface User {
    fname: string;
    lname: string;
    age: number;
    gender: string;
    verified?: boolean; //optional property (?:)
}

const user: User = {
    fname: "Jay",
    lname: "Yadav",
    age: 12,
    gender: "male",
    verified: true,
};

// Assignment 1

// Problem: Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

function isLegal1(user: User): boolean {
    return user.age >= 18;
}

console.log(isLegal1(user));

// Implementing Interfaces
// In TypeScript, you can implement interfaces using classes. This provides a way to define a blueprint for the structure and behavior of a class.

interface Person {
    fname: string;
    age: number;
    speak(word: string): void;
}

class Employee implements Person {
    fname: string;
    age: number;
    constructor(fname: string, age: number) {
        this.fname = fname;
        this.age = age;
    }
    speak(word: string): void {
        console.log(word);
    }
}

const emp1 = new Employee("Jay", 22);
emp1.speak("Hello to World from class");

// In summary, choose types for flexibility and advanced type features, and use interfaces for object shapes, contracts, and class implementations, ensuring a consistent and readable codebase.

// Enums allow a developer to define a set of named constants

enum ResponseStatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

function resolve(Status: ResponseStatusCode): void {
    console.log(`Response code is : ${Status}`);
}

resolve(ResponseStatusCode.Success);
resolve(ResponseStatusCode.NotFound);
// resolve(Anything);   // gives error

// Generics
// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

function echo<T>(agr: T) {
    console.log(agr);
}
echo<string>("Jayesh");
echo<number>(12);
