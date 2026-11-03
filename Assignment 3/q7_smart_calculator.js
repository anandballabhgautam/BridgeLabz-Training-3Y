"use strict";
// Q7 - Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error { constructor(m) { super(m); this.name = "InvalidOperationError"; } }
class DivideByZeroError extends Error { constructor(m) { super(m); this.name = "DivideByZeroError"; } }
class NegativeRootError extends Error { constructor(m) { super(m); this.name = "NegativeRootError"; } }

function calculate(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError(`Cannot divide ${a} by 0`);
      return a / b;
    case "power": return Math.pow(a, b);
    case "root": // square root of the first number
      if (a < 0) throw new NegativeRootError(`Cannot take root of negative number ${a}`);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Unknown operation "${op}"`);
  }
}

console.log("=== Q7: Smart Calculator ===");
const summary = [];
for (const op of [...operations, "modulo"]) { // "modulo" shows InvalidOperationError
  try {
    const result = calculate(op, num1, num2);
    summary.push({ op, status: "OK", result });
  } catch (err) {
    summary.push({ op, status: `ERROR (${err.name})`, result: err.message });
  }
}
// Extra: root of negative number
try { calculate("root", -9, 0); } catch (err) { summary.push({ op: "root(-9)", status: `ERROR (${err.name})`, result: err.message }); }

console.log(`Inputs: num1=${num1}, num2=${num2}`);
console.log("Operation".padEnd(12) + "Status".padEnd(32) + "Result");
console.log("-".repeat(70));
for (const s of summary) console.log(s.op.padEnd(12) + s.status.padEnd(32) + s.result);
