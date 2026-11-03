"use strict";
// Q2 - Microtask vs Macrotask order
console.log("=== Q2: Micro vs Macro ===");

console.log("Start");                                              // 1. synchronous

setTimeout(() => console.log("Macrotask: setTimeout callback"), 0); // goes to the macrotask (timer) queue

Promise.resolve().then(() => console.log("Microtask: Promise.then callback")); // goes to the microtask queue

console.log("Synchronous log (between scheduling and End)");        // 2. synchronous

console.log("End");                                                 // 3. synchronous

/* EXPECTED OUTPUT ORDER
   Start -> Synchronous log -> End -> Microtask: Promise.then -> Macrotask: setTimeout

   WHY MICROTASKS RUN BEFORE MACROTASKS
   1. The call stack runs all synchronous code first (Start, Synchronous log, End).
   2. When the stack is empty, the event loop drains the ENTIRE microtask queue
      (promise callbacks, queueMicrotask) before it moves on.
   3. Only then does it take ONE macrotask (setTimeout, setInterval, I/O), and it
      drains microtasks again after each macrotask.
   So even a 0 ms timer waits behind every pending promise callback. */
