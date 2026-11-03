/**
 * Q2. String Manipulation Report
 * Requirements:
 * - Store a product name like " wireless headphones PRO ".
 * - Trim extra spaces, convert to lowercase, then capitalize the first letter of each word.
 * - Replace "pro" with "Pro Edition".
 * - Display the cleaned title and its length.
 * - Use methods: trim(), split(), map(), join(), replace(), and length.
 */

const rawProductName = " wireless headphones PRO ";

// Step 1: Trim whitespace and convert to lowercase
const trimmedLower = rawProductName.trim().toLowerCase();

// Step 2: Capitalize first letter of each word
const words = trimmedLower.split(" ");
const capitalizedWords = words.map(word => {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
});
const capitalizedTitle = capitalizedWords.join(" ");

// Step 3: Replace "Pro" with "Pro Edition" (case sensitive replacement post capitalization)
const cleanedTitle = capitalizedTitle.replace("Pro", "Pro Edition");

// Step 4: Display results
console.log("--- Q2: String Manipulation Report ---");
console.log(`Original Name: "${rawProductName}"`);
console.log(`Cleaned Title: "${cleanedTitle}"`);
console.log(`Title Length : ${cleanedTitle.length} characters`);
