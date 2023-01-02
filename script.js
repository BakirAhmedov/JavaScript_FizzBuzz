"use strict";

let result = fizzBuzz(15);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("Bu son emas");
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else if (input % 3 !== 0 && input % 5 !== 0) {
    console.log(input);
  }
}
console.log(result);
