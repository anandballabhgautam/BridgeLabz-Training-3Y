"use strict";
// Q5 - Hoisting Lab: The Sequence Trap
console.log("=== Q5: Hoisting Lab ===");

/* ORIGINAL CODE and PREDICTION:
   console.log(score);   -> undefined        (var hoisted, initialised to undefined)
   announce();           -> "Game started"   (function declaration fully hoisted: name + body)
   var score = 50;
   function announce() { console.log("Game started"); }
   let status = "ready";
   startGame();          -> "ready"          (status is initialised BEFORE this call, so no TDZ error)
   function startGame() { console.log(status); }

   MEMORY STATE at creation phase (before any line runs):
   - score     : var            -> exists, value undefined
   - announce  : function decl  -> exists, full function body
   - status    : let            -> exists but in TDZ (Temporal Dead Zone), accessing = ReferenceError
   - startGame : function decl  -> exists, full function body
*/
console.log("--- Original sequence (runs fine) ---");
console.log(score);   // undefined
announce();           // Game started
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();          // ready
function startGame() { console.log(status); }

// The real trap: calling startGame() BEFORE `let status` would throw. Demonstrate safely:
console.log("--- Trap demo: let in TDZ ---");
try {
  (function trap() {
    helper();                   // helper is hoisted, but it reads `mode` which is still in TDZ
    let mode = "ready";
    function helper() { console.log(mode); }
  })();
} catch (e) {
  console.log(`Caught ${e.name}: ${e.message}`);
}

// 2. FIXED: declare first, then use (let/const + initialise before use)
console.log("--- Fixed version ---");
const fixedScore = 50;
const fixedStatus = "ready";
function announceFixed() { console.log("Game started"); }
function startGameFixed() { console.log(fixedStatus); }
console.log(fixedScore);
announceFixed();
startGameFixed();

// 3. ARROW FUNCTION version: arrows are expressions, so only the VARIABLE is hoisted, not the body.
console.log("--- Arrow function comparison ---");
try {
  announceArrowVar(); // var is hoisted as undefined -> calling undefined
} catch (e) {
  console.log(`var arrow  -> ${e.name}: ${e.message}`);
}
var announceArrowVar = () => console.log("Game started (arrow var)");

try {
  announceArrowConst(); // const is in TDZ
} catch (e) {
  console.log(`const arrow -> ${e.name}: ${e.message}`);
}
const announceArrowConst = () => console.log("Game started (arrow const)");

announceArrowVar();   // works after definition
announceArrowConst();
// Summary: function declaration callable anywhere in scope; var arrow = TypeError; const/let arrow = ReferenceError.
