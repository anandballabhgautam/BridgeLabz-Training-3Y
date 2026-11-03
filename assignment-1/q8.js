/**
 * Q8. Employee Salary Projection
 * Requirements:
 * - Declare current salary and annual increment rate (in %).
 * - Use a for loop to compute salary for each of 5 years.
 * - Print yearly salary in a formatted console table.
 * - Apply rounding and assignment operators.
 */

let currentSalary = 500000;
const incrementRate = 8;
const projectionYears = 5;

const salaryRecords = [];

for (let year = 1; year <= projectionYears; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    
    salaryRecords.push({
        Year: `Year ${year}`,
        "Increment Rate": `${incrementRate}%`,
        "Projected Salary (₹)": Math.round(currentSalary)
    });
}

console.log("--- 5-Year Employee Salary Projection ---");
console.table(salaryRecords);
