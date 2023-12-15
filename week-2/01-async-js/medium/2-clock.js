// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  //   logic to get am and pm accordingly
  let type = h < 12 ? "AM" : "PM";
  //   24 house converting to 12 hours
  h = h % 12;
  console.log(
    h + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + type
  );
}, 1000);
