"use strict";
// Q9 - Debugging the Event Loop

/* PREDICTED OUTPUT ORDER (written BEFORE running):
   1. Script start
   2. Script end
   3. Promise callback
   4. Timeout callback
*/
const predicted = ["Script start", "Script end", "Promise callback", "Timeout callback"];
const actual = [];
function log(message) { console.log(message); actual.push(message); } // records order for comparison

console.log("=== Q9: Event Loop ===");
log("Script start");
setTimeout(() => log("Timeout callback"), 0);
Promise.resolve().then(() => log("Promise callback"));
log("Script end");

// Runs after the timeout callback (timers fire in order of their delay, this one is later)
setTimeout(() => {
  console.log("\nPredicted:", predicted.join(" -> "));
  console.log("Actual   :", actual.join(" -> "));
  console.log("Prediction correct?", JSON.stringify(predicted) === JSON.stringify(actual));
}, 10);

/* WHY PROMISES (MICROTASKS) RUN BEFORE setTimeout (MACROTASKS)
   - Synchronous code runs first on the call stack: "Script start", "Script end".
   - setTimeout hands its callback to the timer API; once the delay elapses it is placed in the macrotask queue.
   - .then() callbacks go in the microtask queue, which has HIGHER priority.
   - When the call stack empties, the event loop runs ALL microtasks, and only then picks the next macrotask.
   So a 0 ms timeout still runs after the promise callback. */
