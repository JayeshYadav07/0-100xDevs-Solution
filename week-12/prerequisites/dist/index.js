"use strict";
// create a function that give the sum of the age of two users
const result = function (user1, user2) {
    return user1.age + user2.age;
};
console.log(result({ name: "jay", age: 22 }, { name: "future Jayesh", age: 1 }));
