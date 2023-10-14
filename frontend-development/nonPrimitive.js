// Arrays
//userid, firstName, lastName, age, gender, nationality, fatherName

// let user = ["rakesh", "sharma", 20, "male", "indian", false];

// console.log(user.length);
// console.log(user[0]);
// user.push("Manoj Sharma");
// console.log(user);
// user.pop();
// console.log(user);
// user.unshift("sdfs");
// console.log(user);
// user.shift();
// console.log(user);
// let ifExist = user.includes(20);
// console.log(ifExist);

// for (let num = 0; num < user.length; num += 1) {
//   console.log(user[num]);
// }

// let str = ["r", "a", "k", "e", "s", "h"];
// console.log(typeof str.join(","));

// let string = "hello world";
// let splitted = string.split("");
// console.log(splitted);

// objects
//userid, firstName, lastName, age, gender, nationality, fatherName

// let user = ["rakesh", "sharma", 20, "male", "indian", false]
let user1 = {
  // key : value,
  userid: "sdffas",
  firstName: "Rakesh",
  lastName: "sharma",
  age: 20,
  gender: "male",
  nationality: "indian",
  fatherName: "Manoj Sharma",
};
console.log(user1.firstName);
console.log(user1["firstName"]);

user1["motherName"] = "Neeta Sharma";
user1["firstName"] = "Vinod";
console.log(user1);
