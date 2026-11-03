"use strict";
// Q1 - Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];   // entries that give a usable number
const invalidEntries = []; // entries skipped (logged separately)

// Number(), Boolean() and String() coercions. Note: Number(" ") is 0 and Number(null) is 0,
// which are "false positives", so we validate explicitly rather than trusting Number() alone.
function isValidNumeric(value) {
  if (value === null || value === undefined) return false;           // no data at all
  if (typeof value === "string" && value.trim() === "") return false; // blank string -> 0 silently
  return !Number.isNaN(Number(value));                                // "NaN", "100px", "true" -> NaN
}

console.log("=== Q1: Dynamic Data Parser ===");
for (let i = 0; i < apiData.length; i++) {
  const v = apiData[i];
  const asNumber = Number(v);
  const asBoolean = Boolean(v); // truthiness: ONLY "" / 0 / NaN / null / undefined are false; "false" and " " are TRUE
  const asString = String(v);   // String(null) -> "null", String(undefined) -> "undefined"
  const ok = isValidNumeric(v);

  const tag = ok ? "[VALID]  " : "[INVALID]";
  console.log(`${tag} #${i} raw=${JSON.stringify(v)} (${typeof v}) | Number=${asNumber} | Boolean=${asBoolean} | String="${asString}"`);

  if (ok) validNumbers.push(asNumber);
  else invalidEntries.push({ index: i, raw: v, reason: asNumber === 0 ? "blank/null coerces to 0" : "not numeric" });
}

console.log("\n--- Skipped values (logged separately) ---");
for (const item of invalidEntries) {
  console.log(`  Index ${item.index}: ${JSON.stringify(item.raw)} -> ${item.reason}`);
}

console.log("\n--- Report ---");
console.log("Valid numeric array  :", validNumbers);
console.log("Invalid entries array:", invalidEntries.map(e => e.raw));
console.log(`Valid: ${validNumbers.length} | Invalid: ${invalidEntries.length} | Total: ${apiData.length}`);
console.log(`Sum of valid numbers: ${validNumbers.reduce((a, b) => a + b, 0)}`);
