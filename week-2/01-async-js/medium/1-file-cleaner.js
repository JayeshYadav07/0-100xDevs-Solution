// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require("fs");

fs.readFile("1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    let newData = "";
    for (let i = 0; i < data.length; i++) {
      //logic of removing space
      if (
        (i == 0 && data[i] == " ") ||
        (data[i] == " " && data[i - 1] == " ")
      ) {
        continue;
      } else {
        newData += data[i];
      }
    }

    // writing data back to file
    fs.writeFile("1.txt", newData, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Successfully Done");
      }
    });
  }
});
