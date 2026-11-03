/**
 * Q7. Customer Feedback Processor
 * Requirements:
 * - Store a feedback string like "Great product! Fast delivery and amazing sound quality!".
 * - Use string methods to:
 *   - Count words
 *   - Check if feedback includes "bad" or "poor"
 *   - If not -> print "Positive Feedback"
 *   - Else -> "Needs Improvement"
 * - Use includes(), split(), and conditional statements.
 */

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for case-insensitive checking
const lowerFeedback = feedback.toLowerCase();

// Count words by splitting by whitespace
const wordCount = feedback.trim().split(/\s+/).length;

// Check for negative sentiment keywords
const containsNegativeKeywords = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

let feedbackStatus = "";
if (!containsNegativeKeywords) {
    feedbackStatus = "Positive Feedback";
} else {
    feedbackStatus = "Needs Improvement";
}

console.log("--- Q7: Customer Feedback Processor ---");
console.log(`Feedback Text : "${feedback}"`);
console.log(`Word Count    : ${wordCount}`);
console.log(`Evaluation    : ${feedbackStatus}`);
