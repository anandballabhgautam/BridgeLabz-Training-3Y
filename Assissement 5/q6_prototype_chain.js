"use strict";
// Q6 - Chain: Person -> Faculty -> Professor
console.log("=== Q6: Person -> Faculty -> Professor ===");

function Person(name) { this.name = name; }
Person.prototype.introduce = function () { console.log(`I am ${this.name}`); };

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () { console.log(`Department: ${this.department}`); };

function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () { console.log(`Research area: ${this.researchArea}`); };

const prof = new Professor("Dr. Sharma", "Physics", "Quantum Computing");

// Method lookup walks up: Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype
prof.showResearch();   // from Professor.prototype
prof.showDepartment(); // from Faculty.prototype
prof.introduce();      // from Person.prototype

console.log("\nInstance checks:",
  prof instanceof Professor, prof instanceof Faculty, prof instanceof Person);
console.log("Chain:",
  Object.getPrototypeOf(prof) === Professor.prototype,
  Object.getPrototypeOf(Professor.prototype) === Faculty.prototype,
  Object.getPrototypeOf(Faculty.prototype) === Person.prototype);
console.log("Own properties of prof:", Object.keys(prof));
