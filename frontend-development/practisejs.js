// Even or Odd: Write a function that takes an integer as input and returns "Even" if it's even and "Odd" if it's odd.
// function checkIfEven(n) {
//   if (typeof n === "number") {
//     if (n % 2 == 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   } else {
//     return "Enter a valid number";
//   }
// }

// let ans = checkIfEven(false);
// console.log(ans);

// Array Sum: Create a function that calculates the sum of all elements in an array.

// function sum(array) {
//   let arraySum = 0;
//   for (let i = 0; i < array.length; i = i + 1) {
//     if (typeof array[i] === "number") {
//       arraySum += array[i];
//     } else {
//       return "Invalid type found at index " + i;
//     }
//   }
//   return arraySum;
// }

// let ans = sum([1, 2, 3, "hello", -55, 600, false]);
// console.log(ans);

// Array Max: Write a function that finds and returns the maximum value in an array.
// function getMax(array) {
//   let max = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (typeof array[i] === "number") {
//       if (max < array[i]) {
//         max = array[i];
//       }
//     } else {
//       return "Invalid input at index " + i;
//     }
//   }
//   return max;
// }

// let ans = getMax([-100, 0, 1, 2, 4, -500, 80, 0, 1000, "helo"]);
// console.log(ans);

// Reverse String: Create a function that takes a string as input and returns the reverse of that string.
// function reverse(string) {
//   let reverseString = "";

//   if (typeof string == "string") {
//     for (let i = string.length - 1; i >= 0; i = i - 1) {
//       reverseString += string[i];
//     }
//   } else {
//     return "Enter valid string";
//   }
//   return reverseString;
// }
// let ans = reverse(100);
// console.log(ans);

// Factorial: Write a function to calculate the factorial of a given integer.
// function factorial(n) {
//   let multiple = 1;
//   for (let i = 1; i <= n; i += 1) {
//     multiple *= i;
//   }
//   return multiple;
// }
// let ans = factorial(5);
// console.log(ans);
// Palindrome Check: Implement a function that checks if a given string is a palindrome (reads the same backward as forward).
// function checkPalindrome(string) {
//   let ifPalindrome = false;
//   for (let i = 0; i < string.length; i += 1) {
//     let first = string[i];
//     let last = string[string.length - 1 -i];
//     if (first === last) {
//       ifPalindrome = true;
//     } else {
//       ifPalindrome = false;
//       return ifPalindrome;
//     }
//   }
//   return ifPalindrome;
// }
// let ans = checkPalindrome("malayalam");
// console.log(ans);

// Fibonacci Sequence: Write a function to generate the first n terms of the Fibonacci sequence.
// function Fibonacci(n) {
//   let solution = [0, 1];
//   for (let i = 0; i < n; i += 1) {
//     let sum = solution[solution.length - 2] + solution[solution.length - 1];
//     solution.push(sum);
//   }
//   return solution;
// }

// let sum = Fibonacci(10);
// console.log(sum);
// FizzBuzz: Implement the classic FizzBuzz problem: Write a program that prints numbers from 1 to 100, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i += 1) {
//     if (i % 3 == 0 && i % 5 != 0) {
//       console.log("Fizz " + i);
//     } else if (i % 3 != 0 && i % 5 == 0) {
//       console.log("Buzz " + i);
//     } else if (i % 15 == 0) {
//       console.log("Fizzbuzz " + i);
//     }
//     // if (i % 15 == 0) {
//     //   console.log("Fizzbuzz " + i);
//     // } else if (i % 5 == 0) {
//     //   console.log("Buzz " + i);
//     // } else if (i % 3 === 0) {
//     //   console.log("Fizz " + i);
//     // }
//   }
// }

// fizzBuzz();
