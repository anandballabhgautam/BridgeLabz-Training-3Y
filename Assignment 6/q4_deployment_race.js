"use strict";
// Q4 - Promise.all vs Promise.race

const FAILURE_PROBABILITY = 0.15; // random failure chance per server

function deployToServer(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_PROBABILITY) {
        reject(new Error(`${serverName} failed`));
      } else {
        resolve(`${serverName} responded after ${delayMs / 1000}s`);
      }
    }, delayMs);
  });
}

console.log("=== Q4: Deployment Race ===");
const startTime = Date.now();

// Fresh promises for each combinator so each one gets its own independent random outcome.
const allPromise = Promise.all([deployToServer("Server A", 2000), deployToServer("Server B", 3000)])
  .then((results) => {
    console.log("Deployment completed for all servers"); // fires at ~3s (slowest one)
    console.log("  Details:", results);
  })
  .catch((error) => {
    // Promise.all rejects immediately when ANY promise rejects
    console.log(`Promise.all failed: ${error.message}`);
  });

const racePromise = Promise.race([deployToServer("Server A", 2000), deployToServer("Server B", 3000)])
  .then((winner) => {
    console.log("Fastest response:", winner); // fires at ~2s
  })
  .catch((error) => {
    // Promise.race settles with the FIRST outcome, even if it is a rejection
    console.log(`Promise.race failed: ${error.message}`);
  });

Promise.allSettled([allPromise, racePromise]).then(() => {
  console.log(`Total elapsed: ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
});
