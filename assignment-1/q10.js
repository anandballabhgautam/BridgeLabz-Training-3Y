/**
 * Q10. Citizen Eligibility Validator
 * Requirements:
 * - Input: age and isCitizen (boolean).
 * - Use nested if-else and logical operators to print:
 *   - "Eligible for all services." if citizen and age ≥ 21
 *   - "Eligible to vote only." if citizen and 18–20
 *   - "Only age criteria met." if not citizen but age ≥ 18
 *   - "Not eligible yet." otherwise
 */

const age = 19;
const isCitizen = true;

console.log("--- Citizen Eligibility Validator ---");
console.log(`Age: ${age} | Is Citizen: ${isCitizen}`);

if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
