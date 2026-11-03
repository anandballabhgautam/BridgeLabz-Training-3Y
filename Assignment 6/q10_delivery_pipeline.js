"use strict";
// Q10 - Async Delivery Pipeline

const FAILURE_PROBABILITY = 0.1; // chance each step fails; set 0 to always succeed

// Random delay 1-2 seconds
const randomDelay = () => 1000 + Math.floor(Math.random() * 1001);

// Each step returns a Promise. setTimeout hands the timer to the runtime (Node/browser),
// the call stack becomes free, and the callback later goes to the macrotask queue.
// When resolve()/reject() is called, the awaiting async function resumes as a MICROTASK.
function createDeliveryStep(stepName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_PROBABILITY) reject(new Error(`${stepName} failed`));
      else resolve(stepName);
    }, randomDelay());
  });
}

const takeOrder = () => createDeliveryStep("takeOrder");
const prepare = () => createDeliveryStep("prepare");
const pack = () => createDeliveryStep("pack");
const dispatch = () => createDeliveryStep("dispatch");
const deliver = () => createDeliveryStep("deliver");

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    // `await` pauses ONLY this function. The event loop stays free to run other code meanwhile.
    // When the promise settles, the function resumes right where it stopped.
    await takeOrder();
    console.log("Step 1: Order taken");
    await prepare();
    console.log("Step 2: Food prepared");
    await pack();
    console.log("Step 3: Package ready");
    await dispatch();
    console.log("Step 4: Out for delivery");
    await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    // A rejected promise makes `await` throw, so control jumps here and remaining steps are skipped.
    console.log("Pipeline failed!");
    console.log(`(Reason: ${error.message})`);
  }
}

console.log("=== Q10: Delivery Pipeline ===");
runPipeline();
// This line runs IMMEDIATELY after runPipeline hits its first await, proving the code is non-blocking:
console.log("(main script continues while the pipeline waits...)");
