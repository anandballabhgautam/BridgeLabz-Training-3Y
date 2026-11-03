"use strict";
// Q4 - Debugging Mystery
console.log("=== Q4: Debugging Mystery ===");

// 1. ORIGINAL (broken) version, wrapped in try/catch so the file continues to run.
function showMessageBroken() {
  greeting = "Welcome"; // undeclared -> in strict mode: ReferenceError: greeting is not defined
  console.log(greeting);
}
try {
  showMessageBroken();
} catch (e) {
  // WHY: Sloppy mode silently creates a global variable on assignment to an undeclared name
  // (accidental global). Strict mode removes that behaviour: assignment must target a binding
  // that already exists (declared via let / const / var).
  console.log(`Caught ${e.name}: ${e.message}`);
}

// 2. FIX: declare with const/let. Now `greeting` is function-scoped (local), not a leaked global.
function showMessage() {
  const greeting = "Welcome"; // WATCH variable: greeting. Call stack: showMessage -> (anonymous/module)
  debugger;                   // pause here in VS Code: see Call Stack panel and Watch panel
  console.log(greeting);
}
showMessage();
console.log("typeof greeting outside function:", typeof greeting, "(no leak)");

/* VS CODE DEBUGGING STEPS
   1. Open file, press F5 (Run and Debug -> Node.js) or use the launch config provided.
   2. Click the gutter on `const greeting` to add a breakpoint.
   3. Debug panel -> WATCH -> "+" -> type `greeting`. It is "undefined" before the line runs (TDZ-> uninitialised for const).
   4. CALL STACK panel shows: showMessage <- Module._compile / anonymous. F11 steps into, Shift+F11 steps out. */
