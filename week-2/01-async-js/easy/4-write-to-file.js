// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("1.txt", "Hii Everyone, If u see do follow pls", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Done 🙂");
  }
});

let sum = 0;

while (sum < 100000000) {
  sum += 2;
}

console.log(sum);
