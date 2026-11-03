/**
 * Q9. Random Math Quiz Generator
 * Requirements:
 * - Generate two numbers (1–20) and a random operator from ['+', '-', '*', '/'].
 * - Calculate correct answer using switch statement.
 * - Display question and correct answer in the console.
 * - Ensure division is rounded to two decimals with toFixed(2).
 */

const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;
    default:
        correctAnswer = 0;
}

console.log("--- Random Math Quiz ---");
console.log(`Question: What is ${num1} ${operator} ${num2}?`);
console.log(`Correct Answer: ${correctAnswer}`);
