/**
 * Q3. Math Utility Dashboard
 * Requirements:
 * - Take a number x = 16.75.
 * - Display:
 *   - Rounded value (Math.round)
 *   - Square root (Math.sqrt)
 *   - Power (Math.pow(x, 3))
 *   - Random number between 10–50 (Math.floor(Math.random() * 41) + 10)
 * - Use template literals to show a formatted result summary.
 */

const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerOfThree = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10; // Range: 10 to 50 inclusive

const dashboardSummary = `
========================================
       MATH UTILITY DASHBOARD
========================================
Original Value (x)   : ${x}
----------------------------------------
Rounded Value        : ${roundedValue}
Square Root          : ${squareRoot.toFixed(4)}
Power (x^3)          : ${powerOfThree.toFixed(2)}
Random Num (10-50)   : ${randomNumber}
========================================`;

console.log(dashboardSummary);
