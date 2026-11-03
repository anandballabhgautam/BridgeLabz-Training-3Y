"use strict";
// Q2 - Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Broken", salary: "abc", years: "3" }, // extra: shows conversion error handling
  { name: "NoYears", salary: "30000" }            // extra: shows missing property handling
];

function calculateBonus(emp) {
  // "use strict" means a typo like `bonuss = ...` would throw ReferenceError, not create a global.
  if (!("salary" in emp) || !("years" in emp)) {
    throw new Error(`Missing property for ${emp.name}: ${!("salary" in emp) ? "salary" : "years"}`);
  }
  const salary = Number(emp.salary);
  const years = Number(emp.years);
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert values for ${emp.name}: salary="${emp.salary}", years="${emp.years}"`);
  }
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { salary, years, bonus };
}

console.log("=== Q2: Employee Bonus Calculator ===");
for (const emp of employees) {
  try {
    const r = calculateBonus(emp);
    console.log(`Employee: ${emp.name.padEnd(8)} | Salary: Rs.${r.salary.toLocaleString("en-IN")} | Years: ${r.years} | Bonus: Rs.${r.bonus.toLocaleString("en-IN")} | Total: Rs.${(r.salary + r.bonus).toLocaleString("en-IN")}`);
  } catch (err) {
    console.log(`ERROR [${err.name}]: ${err.message}`);
  }
}
