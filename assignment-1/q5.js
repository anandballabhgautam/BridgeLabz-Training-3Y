/**
 * Q5. Weather Activity Planner
 * Requirements:
 * - Create variables for temperature, isRaining, windSpeed.
 * - If raining -> "Stay indoors with hot coffee."
 * - Else if temperature > 35 -> "Go swimming."
 * - Else if temperature < 15 and windSpeed > 20 -> "Too cold and windy — stay home."
 * - Else -> "Perfect day for a walk."
 * - Combine && and || conditions smartly.
 */

const temperature = 28;
const isRaining = false;
const windSpeed = 10;

let advice = "";

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}

console.log("--- Weather Activity Planner ---");
console.log(`Temperature: ${temperature}°C | Raining: ${isRaining} | Wind Speed: ${windSpeed} km/h`);
console.log(`Advice: ${advice}`);
