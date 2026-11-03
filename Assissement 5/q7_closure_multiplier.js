"use strict";
// Q7 - Closure
console.log("=== Q7: makeMultiplier ===");

function makeMultiplier(multiplier) {
  // The returned inner function "remembers" `multiplier` from this outer scope.
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
console.log("triple(5) =", triple(5)); // 15
console.log("double(5) =", double(5)); // 10
console.log("triple(10) =", triple(10)); // 30

/* HOW THE CLOSURE WORKS
   1. makeMultiplier(3) runs and creates a local variable multiplier = 3.
   2. It returns the inner function, and then the outer function finishes.
   3. Normally its local variables would be discarded, but the inner function still
      references `multiplier`, so JavaScript keeps that variable alive.
   4. That inner function + its remembered outer variables = a closure.
   5. Each call to makeMultiplier creates a NEW closure with its own multiplier,
      so triple and double do not interfere with each other. */
