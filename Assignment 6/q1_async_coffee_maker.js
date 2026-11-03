"use strict";
// Q1 - Async Coffee Maker (Promise chaining)

// Chance that any step fails. Set to 0 for a guaranteed success, 1 for a guaranteed failure.
const FAILURE_PROBABILITY = 0.2;

// Random delay between 1000 and 2000 ms
function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1001);
}

// Generic step factory: every step returns a Promise that settles after 1-2 seconds.
function createStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    console.log(`Starting: ${stepName}...`);
    setTimeout(() => {
      if (Math.random() < FAILURE_PROBABILITY) {
        reject(new Error(`${stepName} failed`)); // simulated random failure
      } else {
        resolve(successMessage);
      }
    }, randomDelay());
  });
}

const boilWater = () => createStep("Boiling water", "Water boiled");
const brewCoffee = () => createStep("Brewing coffee", "Coffee brewed");
const pourIntoCup = () => createStep("Pouring into cup", "Coffee poured");

console.log("=== Q1: Async Coffee Maker ===");
boilWater()
  .then((result) => {
    console.log(`Done: ${result}`);
    return brewCoffee(); // returning a Promise makes the chain WAIT for it
  })
  .then((result) => {
    console.log(`Done: ${result}`);
    return pourIntoCup();
  })
  .then((result) => {
    console.log(`Done: ${result}`);
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    // A rejection in ANY step skips the remaining .then() calls and lands here.
    console.log(`Coffee process failed: ${error.message}`);
  });
