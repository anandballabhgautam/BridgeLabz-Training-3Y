/**
 * Q6. Event-Based Counter Simulation
 * Requirements:
 * - Use variable count = 0.
 * - Create two functions: increment() and decrement().
 * - Each function modifies count and logs current value.
 * - Simulate "click" by calling these functions manually in code.
 * - Use a nested function to show function scope of count updates.
 */

let count = 0;

function increment() {
    // Nested helper function demonstrating scope access to parent count
    function updateAndLog(change) {
        count += change;
        console.log(`[Event: Increment] Current Count: ${count}`);
    }
    updateAndLog(1);
}

function decrement() {
    // Nested helper function demonstrating scope access to parent count
    function updateAndLog(change) {
        count += change;
        console.log(`[Event: Decrement] Current Count: ${count}`);
    }
    updateAndLog(-1);
}

console.log("--- Q6: Event-Based Counter Simulation ---");
console.log(`Initial Count: ${count}`);

// Simulating click events manually
console.log("
Simulating Click Events:");
increment(); // Click +1 -> 1
increment(); // Click +1 -> 2
increment(); // Click +1 -> 3
decrement(); // Click -1 -> 2
increment(); // Click +1 -> 3
decrement(); // Click -1 -> 2
