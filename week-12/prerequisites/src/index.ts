// create a function that give the sum of the age of two users

interface User {
    name: String;
    age: number;
}
const result = function (user1: User, user2: User): number {
    return user1.age + user2.age;
};

console.log(
    result({ name: "jay", age: 22 }, { name: "future Jayesh", age: 1 })
);
