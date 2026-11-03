/**
 * Q1. Personalized Login Greeting
 * Requirements:
 * - Declare variables for userName and current hour using new Date().getHours().
 * - If time is before 12 -> "Good Morning [name]!"
 * - If time is between 12 and 17 -> "Good Afternoon [name]!"
 * - Otherwise -> "Good Evening [name]!"
 * - Use template literals and proper string formatting.
 */

const userName = "Aarav";
const currentHour = new Date().getHours();

let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(`Current Hour: ${currentHour}`);
console.log(greeting);
