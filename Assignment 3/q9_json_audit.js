"use strict";
// Q9 - JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const requiredKeys = ["user", "age"];

console.log("=== Q9: JSON Audit ===");
for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;
  debugger; // Breakpoint: step with F10. On bad JSON, control jumps from JSON.parse straight into catch (skips rest of try).
  try {
    const obj = JSON.parse(rawData[i]);               // throws SyntaxError for '{invalid}'
    const missing = requiredKeys.filter(k => !(k in obj));
    if (missing.length > 0) throw new Error(`Missing key(s): ${missing.join(", ")}`);
    clean.push(obj);                                  // only reached when no error thrown above
    console.log(`Line ${lineNo}: OK ${rawData[i]}`);
  } catch (err) {
    const kind = err instanceof SyntaxError ? "Invalid JSON" : "Validation";
    errors.push({ line: lineNo, kind, message: err.message });
    console.log(`Line ${lineNo}: ${kind} - ${err.message}`);
  } finally {
    // finally runs on both paths, useful to observe control flow
  }
}

console.log("\nClean array:", clean);
console.log("Errors     :", errors);

// Bonus: convert age to Number and keep only adults (>= 18); "filter under-18 users" = remove them
const converted = clean.map(u => ({ ...u, age: Number(u.age) }));
const adults = converted.filter(u => u.age >= 18);
const minors = converted.filter(u => u.age < 18);
console.log("\nAges converted:", converted);
console.log("Adults (18+)  :", adults);
console.log("Under-18 (filtered out):", minors);
