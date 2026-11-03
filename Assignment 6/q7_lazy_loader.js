"use strict";
// Q7 - Promise.allSettled with a random rejection

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

// Wrap a loader so it rejects instead of resolving (after the same delay as the original would take)
function makeFail(loader, moduleName) {
  return () => loader().then(() => { throw new Error(`${moduleName} failed to load`); });
}

async function main() {
  console.log("=== Q7: Lazy Loader ===");
  const moduleNames = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];

  // Randomly pick one module to fail
  const failIndex = Math.floor(Math.random() * loaders.length);
  loaders[failIndex] = makeFail(loaders[failIndex], moduleNames[failIndex]);
  console.log(`(Randomly chosen to fail: ${moduleNames[failIndex]})`);

  const startTime = Date.now();
  // allSettled NEVER rejects: it waits for every promise and reports each outcome.
  const results = await Promise.allSettled(loaders.map((load) => load()));
  const totalTime = Date.now() - startTime;

  const succeeded = [];
  const failed = [];
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✔ ${moduleNames[index]}: ${result.value}`);
      succeeded.push(moduleNames[index]);
    } else {
      console.log(`✘ ${moduleNames[index]}: ${result.reason.message}`);
      failed.push(moduleNames[index]);
    }
  });

  console.log(`\nSucceeded: ${succeeded.join(", ") || "none"}`);
  console.log(`Failed   : ${failed.join(", ") || "none"}`);
  // Loaders run in parallel, so total time ~ the slowest one (about 2000 ms), not the sum (4500 ms).
  console.log(`Total time taken: ${totalTime} ms`);
}

main();
