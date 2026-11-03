/**
 * Q9. Odd–Even Number Analyzer
 * Requirements:
 * - Accept numbers 1–30 in an array using a loop.
 * - For each number:
 *   - If divisible by 3 and 5 -> print "FizzBuzz"
 *   - Else if even -> print "Even"
 *   - Else -> print "Odd"
 * - Store results in a new array and display it.
 * - Use %, push(), and conditionals.
 */

// Step 1: Populate numbers 1 to 30 into an array using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Step 2: Analyze each number and store classification in a new array
const classifiedResults = [];

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let label = "";

    if (num % 3 === 0 && num % 5 === 0) {
        label = "FizzBuzz";
    } else if (num % 2 === 0) {
        label = "Even";
    } else {
        label = "Odd";
    }

    classifiedResults.push({ Number: num, Label: label });
}

console.log("--- Q9: Odd–Even Number Analyzer ---");
console.table(classifiedResults);
