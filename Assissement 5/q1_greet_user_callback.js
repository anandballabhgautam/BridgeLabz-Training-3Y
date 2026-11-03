"use strict";
// Q1 - Callback demonstration

// This is the callback: it is passed into greetUser and runs AFTER the greeting.
function showEndMessage() {
  console.log("Step 3: Welcome to the course!");
}

// greetUser receives a function as an argument (functions are first-class values in JS).
function greetUser(name, callback) {
  console.log("Step 1: greetUser started");
  console.log(`Step 2: Hello ${name}`);
  callback(); // control flow: greetUser -> callback -> back to greetUser
  console.log("Step 4: greetUser finished (control returned after callback)");
}

console.log("=== Q1: Callback flow ===");
// Pass the function NAME (no parentheses). Writing showEndMessage() would run it immediately.
greetUser("Riya", showEndMessage);
