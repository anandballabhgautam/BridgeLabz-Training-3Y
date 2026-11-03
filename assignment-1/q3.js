/**
 * Q3. Monthly Expense Tracker
 * Requirements:
 * - Use an array of expenses for 5 categories (food, travel, rent, bills, leisure).
 * - Use arithmetic and assignment operators to add 10% tax to total.
 * - Use toFixed(2) to round values.
 * - Display total, average, and final amount after tax.
 */

const expenses = [12000, 45000, 25000, 6000, 8000];

let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

const averageExpense = totalExpense / expenses.length;

let finalAmount = totalExpense;
finalAmount += totalExpense * 0.10;

console.log("--- Monthly Expense Summary ---");
console.log(`Categories -> Food: ₹${expenses[0]}, Travel: ₹${expenses[1]}, Rent: ₹${expenses[2]}, Bills: ₹${expenses[3]}, Leisure: ₹${expenses[4]}`);
console.log(`Initial Total: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final Amount (with 10% tax): ₹${finalAmount.toFixed(2)}`);
