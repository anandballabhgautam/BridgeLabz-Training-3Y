"use strict";
// Q6 - Employee Management System

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increases monthly salary by percent
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  }
}

const employees = [
  new Employee(101, "Amit", "Engineering", 60000),
  new Employee(102, "Sara", "Design", 45000),
  new Employee(103, "Kiran", "Marketing", 40000),
  new Employee(104, "Neha", "HR", 35000),
  new Employee(105, "Rahul", "Finance", 50000)
];

const formatMoney = (amount) => `Rs.${amount.toLocaleString("en-IN")}`;

console.log("=== Q6: Employee Management ===");
console.log("\nAnnual salaries:");
employees.forEach((emp) => console.log(`${emp.id} | ${emp.name.padEnd(6)} | ${emp.department.padEnd(12)} | ${formatMoney(emp.getAnnualSalary())}`));

// reduce(): accumulator starts at 0 and adds every employee's annual salary
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: ${formatMoney(totalPayout)}`);

console.log("\nApplying 10% bonus to Amit...");
employees[0].applyBonus(10);
console.log(`Amit new monthly salary: ${formatMoney(employees[0].salary)}`);
console.log(`Amit new annual salary : ${formatMoney(employees[0].getAnnualSalary())}`);
console.log(`New total payout       : ${formatMoney(employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0))}`);
