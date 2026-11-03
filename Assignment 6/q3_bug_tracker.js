"use strict";
// Q3 - Callback to Promise migration

// ORIGINAL callback version (kept for comparison)
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Flip to true to simulate an API failure
const SIMULATE_API_FAILURE = Math.random() < 0.3; // random; or set explicitly to true/false

// NEW Promise version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SIMULATE_API_FAILURE) {
        reject(new Error("Bug API is unavailable"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

console.log("=== Q3: Bug Tracker ===");
console.log(`Simulated failure this run: ${SIMULATE_API_FAILURE}`);

// Old style for comparison
fetchBugs((bugs) => console.log("Callback version received:", bugs.length, "bugs"));

getBugs()
  .then((bugs) => {
    // console.table accepts an array; map to objects to get named columns
    console.table(bugs.map((title, index) => ({ "Bug #": index + 1, Description: title })));
  })
  .catch((error) => console.log(`Failed to fetch bugs: ${error.message}`));
