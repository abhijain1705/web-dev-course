// Temperature Check:

// Question: If the temperature is above 30 degrees Celsius, what message should be displayed?
// Options:
// a) "It's a hot day!"
// b) "It's a nice day!"

let temperature = 31;
if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a nice day!");
}

// Age Verification:

// Question: If a person is 18 or older, should they be allowed access? What message should be displayed?
// Options:
// a) Yes, "You are allowed to enter."
// b) No, "Access denied, you are too young."

let age = 2;
if (age >= 18) {
  console.log("You are eligible for voting.");
} else {
  // BODMAS
  console.log("You are not eligible for voting for the next " + (18 - age - 1));
}

// Password Check:

// Question: If the entered password is "12345," what message should be displayed?
// Options:
// a) "Access granted!"
// b) "Incorrect password, access denied."

// let password = "12345,";
// if (password === "12345,") {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

// Even or Odd:

// Question: How can you determine if a number is even or odd using an if...else condition?
// Options:
// a) If it's even, display "It's an even number."
// b) If it's odd, display "It's an odd number."

let num = 21;
if (num % 2 === 0) {
  console.log("even number.");
} else {
  console.log("odd number");
}
// Vote Eligibility:

// Question: Should a person who is 18 or older be eligible to vote? What message should be shown?
// Options:
// a) Yes, "You are eligible to vote."
// b) No, "You are not eligible to vote yet."

// Traffic Light:

// Question: Depending on the color of the traffic light (red, green, or yellow), what action should a driver take?
// Options:
// a) "Stop" for red, "Go" for green, "Slow down" for yellow.

let light = "green";
if (light === "green") {
  console.log("go");
} else if (light === "red") {
  console.log("stop");
} else if (light === "yellow") {
  console.log("slow down");
} else {
  console.log("machine kharab hai.");
}

// Discount Calculation:

// Question: If the purchase amount is greater than $50, should a 10% discount be applied? What should be displayed as the final amount?
// Options:
// a) Yes, apply a 10% discount and display the final amount.
// b) No, show the total amount without a discount.
let amount = 55;
if (amount > 50) {
  // BODMAS
  let discountedValue = amount - amount * (10 / 100);
  console.log(
    "yes 10% discount applied and final amount " + discountedValue + "$"
  );
} else {
  console.log("no, add further " + (51 - amount) + "$ to avail discount");
}

// Password Length:

// Question: How can you determine if an entered password is valid based on its length?
// Options:
// a) If it's at least 8 characters long, display "Password is valid."
// b) If it's shorter, show "Password is too short."
let password = "123456789";
if (password.length > 8) {
  console.log("correct");
} else {
  console.log("wrong password");
}

// Student Grade:

// Question: How can you assign grades to students based on their scores? What grades should be assigned for scores in different ranges?
// Options:
// a) A grade for scores of 80 or higher, B grade for scores between 60 and 79, C grade for scores below 60.
// Gender Check:
let grade = 35;
if (grade >= 80) {
  console.log("A Grade");
} else if (grade <= 79 && grade >= 60) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}

// Question: How should you welcome individuals based on their gender? What message should be displayed for different genders?
// Options:
// a) "Welcome, Sir" for males, "Welcome, Madam" for females, and "Welcome" for other genders.
