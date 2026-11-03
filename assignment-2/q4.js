/**
 * Q4. Array Performance Analyzer
 * Requirements:
 * - Create an array of 8 random scores between 30 and 100.
 * - Calculate:
 *   - Highest and lowest score (Math.max(...arr), Math.min(...arr))
 *   - Average score
 *   - Number of students who passed (≥ 50)
 * - Use array methods like map(), filter(), and reduce().
 * - Display a full summary in a formatted output.
 */

// Generate 8 random scores between 30 and 100
const placeholderArr = [0, 0, 0, 0, 0, 0, 0, 0];
const scores = placeholderArr.map(() => Math.floor(Math.random() * 71) + 30);

// Highest and lowest score
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate total and average score using reduce()
const totalScore = scores.reduce((sum, current) => sum + current, 0);
const averageScore = totalScore / scores.length;

// Filter passing students (score >= 50) using filter()
const passingScores = scores.filter(score => score >= 50);
const passedCount = passingScores.length;

console.log("--- Q4: Array Performance Analyzer ---");
console.log(`Generated Scores : [ ${scores.join(", ")} ]`);
console.log(`Highest Score    : ${highestScore}`);
console.log(`Lowest Score     : ${lowestScore}`);
console.log(`Average Score    : ${averageScore.toFixed(2)}`);
console.log(`Passed Students  : ${passedCount} out of ${scores.length} (Passing Scores: [ ${passingScores.join(", ")} ])`);
