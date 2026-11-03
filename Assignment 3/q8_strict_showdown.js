"use strict";
// Q8 - Strict Mode Showdown
// Problem: the demo code cannot live in this strict file, because strict violations like
// duplicate params are SyntaxErrors found at PARSE time (the whole file would fail).
// So we run each snippet from a string with new Function(), which parses independently.
console.log("=== Q8: Strict Mode Showdown ===");

function run(label, code) {
  try {
    const fn = new Function(code);
    const out = fn();
    console.log(`${label} -> OK${out !== undefined ? ", returned " + out : ""}`);
  } catch (e) {
    console.log(`${label} -> ${e.name}: ${e.message}`);
  }
}

// Original code, SLOPPY mode
console.log("\n--- Without strict mode ---");
run("sloppy: demo(a, a) + total=10 + delete total",
  `function demo(a, a) { total = 10; delete total; return "a=" + a + ", total=" + typeof total; }
   return demo(5, 10);`);
// Result: works. Duplicate param: last wins (a = 10). total becomes accidental global. delete total succeeds
// (globals created by assignment are configurable), so total is gone afterwards.

// Original code, STRICT mode: tested one rule at a time to record each error
console.log("\n--- With \"use strict\" ---");
run("strict: duplicate parameter",  `"use strict"; function demo(a, a) {} demo(5, 10);`);
run("strict: undeclared assignment", `"use strict"; function demo() { total = 10; } demo();`);
run("strict: delete variable",       `"use strict"; function demo() { var total = 1; delete total; } demo();`);

/* WHY ILLEGAL:
   1. Duplicate params: ambiguous (which a?), almost always a bug -> SyntaxError at parse time.
   2. total = 10 (undeclared): typo-prone, pollutes global scope -> ReferenceError.
   3. delete total: delete on a plain identifier is meaningless (variables are not properties) -> SyntaxError.
*/

// Correct ES6 version
console.log("\n--- Corrected version ---");
function demoFixed(a, b) {   // unique parameter names
  let total = 10;            // declared
  total = a + b + total;     // modify value instead of delete
  return total;
}
console.log("demoFixed(5, 10) =", demoFixed(5, 10));
const obj = { total: 10 };   // delete is legal on object PROPERTIES
delete obj.total;
console.log("After delete obj.total:", obj);
