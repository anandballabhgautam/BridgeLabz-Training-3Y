"use strict";
// Q6 - Pyramid Pattern Generator
// Usage: node q6_pyramid.js [rows]   (default = 5)
console.log("=== Q6: Pyramid Pattern Generator ===");

const arg = parseInt(process.argv[2], 10);        // "user input" via command line
const limit = Number.isNaN(arg) || arg < 1 ? 5 : arg; // default 5
console.log(`Rows: ${limit}`);

// Base version using let (block scoped: new binding each loop)
for (let i = 1; i <= limit; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trimEnd());
}

// Fixed 4-row version from the question
console.log("\n--- Original 4-row pattern ---");
for (let i = 1; i <= 4; i++) console.log("* ".repeat(i).trimEnd());

// 1. let vs var: output of the pattern is the same, but SCOPE differs.
console.log("\n--- var version ---");
for (var a = 1; a <= 4; a++) {
  var line = "";                       // var is function/global scoped, re-used (re-declared harmlessly) each iteration
  for (var b = 1; b <= a; b++) line += "* ";
  console.log(line.trimEnd());
}
console.log(`After loops: a=${a}, b=${b} (var leaks out of the loop!)`);

try {
  console.log(typeof i);              // let i is NOT accessible here
  console.log(i);
} catch (e) { console.log(`let i outside loop -> ${e.name}: ${e.message}`); }

// Closure difference proves the "variable re-use": var shares ONE binding, let creates one per iteration.
const fnsVar = [], fnsLet = [];
for (var v = 0; v < 3; v++) fnsVar.push(() => v);
for (let l = 0; l < 3; l++) fnsLet.push(() => l);
console.log("var closures:", fnsVar.map(f => f()), "| let closures:", fnsLet.map(f => f()));

// 4. strict mode catches undeclared loop variable
console.log("\n--- Undeclared loop variable ---");
try {
  for (k = 0; k < 2; k++) { /* k never declared */ }
} catch (e) { console.log(`Strict mode -> ${e.name}: ${e.message}`); }

// 2. DEBUG: put a breakpoint on `row +=` ; Watch i, j, row. j resets to 1 each outer iteration, row resets to "".
