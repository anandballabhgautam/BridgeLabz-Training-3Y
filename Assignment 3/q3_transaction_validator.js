"use strict";
// Q3 - Transaction Validator
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];

// Custom error classes so we can categorise by type
class NegativeAmountError extends Error { constructor(m) { super(m); this.name = "NegativeAmountError"; } }
class MissingFieldError extends Error { constructor(m) { super(m); this.name = "MissingFieldError"; } }
class NullEntryError extends Error { constructor(m) { super(m); this.name = "NullEntryError"; } }

function validate(tx, index) {
  if (tx === null) throw new NullEntryError(`Index ${index}: transaction is null`);
  if (tx.id === undefined || tx.amount === undefined)
    throw new MissingFieldError(`Index ${index}: missing ${tx.id === undefined ? "id" : "amount"}`);
  if (tx.amount < 0) throw new NegativeAmountError(`Index ${index}: negative amount ${tx.amount}`);
  return tx;
}

const valid = [];
const invalid = [];
const errorCategories = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [] };

console.log("=== Q3: Transaction Validator ===");
for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  // BREAKPOINT: click the gutter next to the `debugger` line or leave it; Watch: i, tx, valid, invalid
  debugger;
  try {
    valid.push(validate(tx, i));
    console.log(`OK    : ${JSON.stringify(tx)}`);
  } catch (err) {
    invalid.push({ index: i, type: err.name, message: err.message });
    errorCategories[err.name].push(err.message);
    console.log(`FAILED: [${err.name}] ${err.message}`);
  }
}

console.log("\n--- Final Report ---");
console.log("Valid transactions  :", valid);
console.log("Invalid transactions:", invalid);
console.log("By category         :", errorCategories);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length} | Total: ${transactions.length}`);
