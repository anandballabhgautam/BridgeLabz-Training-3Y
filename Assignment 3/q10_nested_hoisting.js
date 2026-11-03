"use strict";
// Q10 - Nested Hoisting and Closures
console.log("=== Q10: Nested Hoisting and Closures ===");

function outer() {
  console.log(count);       // undefined: outer's own `var count` is hoisted
  var count = 5;
  function inner() {
    console.log(count);     // undefined: inner has ITS OWN hoisted `var count` that shadows outer's
    var count = 10;
  }
  inner();
}
outer();
/* PREDICTION: undefined, undefined
   1. Each function call creates its own execution context (own memory/variable environment).
   2. outer context : count = undefined, inner = function
      inner context : count = undefined (shadows outer's). The outer value 5 is never reached because the
      closure lookup stops at the first scope that has a `count` binding, even if still undefined.
   Without `var count = 10` in inner, inner would print 5 via closure. */

console.log("\n--- Separate memory contexts demo ---");
function outerDemo() {
  var count = 5;
  function innerNoShadow() { console.log("closure reads outer count:", count); }
  function innerShadow() { console.log("shadowed count before assign:", count); var count = 10; console.log("after assign:", count); }
  innerNoShadow();  // 5
  innerShadow();    // undefined, 10
  console.log("outer count unchanged:", count); // 5
}
outerDemo();

console.log("\n--- Inner as arrow function ---");
function outerArrow() {
  console.log(count);   // undefined
  var count = 5;
  try { innerArrow(); } catch (e) { console.log(`Before definition -> ${e.name}: ${e.message}`); } // const in TDZ
  const innerArrow = () => {
    console.log(count); // undefined: var hoisting inside the arrow body works exactly the same
    var count = 10;
  };
  innerArrow();
}
outerArrow();
/* CHANGES with arrow: (a) the inner function is no longer hoisted with its body; it can only be called
   AFTER the const line. (b) var hoisting inside the body is unchanged -> still undefined.
   (c) arrows have no own `this`/`arguments`, which does not matter here. */

// DEBUG SESSION: set breakpoints on each console.log; Watch `count`; in the Variables pane compare the "Local"
// scope of inner vs the "Closure (outer)" scope. Call stack: inner -> outer -> module.
