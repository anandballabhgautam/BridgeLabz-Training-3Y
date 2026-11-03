"use strict";
// Q5 - Callback hell vs async/await
// Each stage takes 1 second. Stages: design -> build -> test -> deploy -> celebrate

// ---------- Version 1: nested callbacks (callback hell) ----------
function stageWithCallback(stageName, done) {
  setTimeout(() => {
    console.log(`[callback] ${stageName} complete`);
    done();
  }, 1000);
}

function runWithCallbacks(onFinished) {
  console.log("--- Nested callbacks ---");
  stageWithCallback("Design", () => {
    stageWithCallback("Build", () => {
      stageWithCallback("Test", () => {
        stageWithCallback("Deploy", () => {
          stageWithCallback("Celebrate", () => {   // the "pyramid of doom"
            onFinished();
          });
        });
      });
    });
  });
}

// ---------- Version 2: async/await ----------
function stageWithPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[async] ${stageName} complete`);
      resolve(stageName);
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("--- async/await ---");
  try {
    await stageWithPromise("Design");
    await stageWithPromise("Build");
    await stageWithPromise("Test");
    await stageWithPromise("Deploy");
    await stageWithPromise("Celebrate");
    console.log("Pipeline finished");
  } catch (error) {
    console.log(`Pipeline error: ${error.message}`); // ONE catch covers every stage
  }
}

/* WHY async/await IS MORE READABLE
   - Code is flat and reads top to bottom like synchronous code, with no growing indentation.
   - A single try/catch handles errors from all stages (callbacks need error checks at every level).
   - Adding, removing or reordering a stage is a one-line change.
   - Loops and conditionals work naturally with await. */

console.log("=== Q5: Callback Hell vs async/await ===");
runWithCallbacks(async () => {
  console.log("Callback pipeline finished\n");
  await runWithAsyncAwait();
});
