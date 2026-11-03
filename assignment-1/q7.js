/**
 * Q7. Smart Guessing Game (Number Range)
 * Requirements:
 * - Generate a random secret number between 1–50 using Math.floor(Math.random() * 50) + 1.
 * - Let userGuess be a variable with a test value.
 * - Print "Correct guess!", "Very close!" (within ±3), or "Too high" / "Too low".
 * - Use nested if conditions and logical operators.
 */

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;

console.log("--- Smart Guessing Game ---");
console.log(`Secret Number (testing): ${secretNumber}`);
console.log(`User Guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else {
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}
