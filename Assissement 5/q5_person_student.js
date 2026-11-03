"use strict";
// Q5 - Prototypal inheritance: Person -> Student
console.log("=== Q5: Person and Student ===");

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // borrow Person's constructor to set this.name
  this.branch = branch;
}
// Link prototypes: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore constructor reference

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
Student.prototype.printDetails = function () {
  this.printName();   // found on Person.prototype (one step up the chain)
  this.printBranch(); // found on Student.prototype
};

const student = new Student("Neha", "Computer Science");
student.printDetails();

console.log("\nPrototype chain proof:");
console.log("student instanceof Student:", student instanceof Student);
console.log("student instanceof Person :", student instanceof Person);
console.log("student -> Student.prototype:", Object.getPrototypeOf(student) === Student.prototype);
console.log("Student.prototype -> Person.prototype:", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("printName own property of student?", Object.hasOwn(student, "printName")); // false
