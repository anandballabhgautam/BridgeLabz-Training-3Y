"use strict";
// Q2 - applyOperation with callbacks

// Applies `operation` to every element and collects results in a new array.
function applyOperation(numbers, operation) {
  const results = [];
  for (const num of numbers) {
    results.push(operation(num)); // callback decides what happens to each number
  }
  return results;
}

const numbers = [1, 2, 3, 4];
const double = (n) => n * 2;
const square = (n) => n * n;

console.log("=== Q2: applyOperation ===");
console.log("Original:", numbers);
console.log("Doubled :", applyOperation(numbers, double)); // [2, 4, 6, 8]
console.log("Squared :", applyOperation(numbers, square)); // [1, 4, 9, 16]
// Inline callback also works:
console.log("Plus 10 :", applyOperation(numbers, (n) => n + 10));
