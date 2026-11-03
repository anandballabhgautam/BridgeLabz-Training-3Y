/**
 * Q1. Scope Conflict Resolver
 * Requirements:
 * - Declare a global variable bonus = 5000.
 * - Inside a function calculateSalary(), declare a local variable salary = 40000.
 * - Add the bonus only if a local variable isPermanent (boolean) is true.
 * - Print total salary inside the function.
 * - Demonstrate how changing isPermanent affects the global variable scope.
 */

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;
    
    // Scoped condition checking permanence
    if (isPermanent) {
        salary += bonus; // Accessing global variable inside local scope
    }

    console.log(`[isPermanent = ${isPermanent}] Total Salary: ₹${salary}`);
    return salary;
}

console.log("--- Q1: Scope Conflict Resolver ---");
console.log(`Global Bonus Amount: ₹${bonus}`);

// Test with permanent employee
calculateSalary(true);

// Test with temporary/non-permanent employee
calculateSalary(false);

// Demonstrating scope separation:
// Attempting to log local variable 'salary' outside function scope would throw a ReferenceError.
// Global 'bonus' remains unaffected by changes made to local 'salary'.
console.log(`Global bonus remains unchanged: ₹${bonus}`);
