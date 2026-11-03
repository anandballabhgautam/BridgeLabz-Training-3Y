"use strict";
// Q8 - Retry mechanism

// Fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) resolve("Order submitted");
      else reject(new Error("Server error"));
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();                     // pauses the loop until the promise settles
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed successfully";   // success: exit the loop and function
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
      // loop continues to the next attempt
    }
  }
  throw new Error("Order could not be processed"); // all attempts failed
}

async function main() {
  console.log("=== Q8: Order Retry ===");
  try {
    const result = await processOrder();
    console.log(result);
  } catch (error) {
    console.log(`Final failure handled: ${error.message}`);
  }
}
main();
