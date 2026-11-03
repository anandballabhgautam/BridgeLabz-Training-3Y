"use strict";
// Q9 - ES6 class version of Person -> Student, compared with prototype version
console.log("=== Q9: ES6 classes vs prototypes ===");

// ---------- Prototype version (from Q5) ----------
function ProtoPerson(name) { this.name = name; }
ProtoPerson.prototype.printName = function () { console.log(`Name: ${this.name}`); };
function ProtoStudent(name, branch) { ProtoPerson.call(this, name); this.branch = branch; }
ProtoStudent.prototype = Object.create(ProtoPerson.prototype);
ProtoStudent.prototype.constructor = ProtoStudent;
ProtoStudent.prototype.printBranch = function () { console.log(`Branch: ${this.branch}`); };
ProtoStudent.prototype.printDetails = function () { this.printName(); this.printBranch(); };

// ---------- ES6 class version ----------
class Person {
  constructor(name) { this.name = name; }
  printName() { console.log(`Name: ${this.name}`); }
}
class Student extends Person {
  constructor(name, branch) {
    super(name); // must be called before using `this`; replaces Person.call(this, name)
    this.branch = branch;
  }
  printBranch() { console.log(`Branch: ${this.branch}`); }
  printDetails() { this.printName(); this.printBranch(); }
}

const protoStudent = new ProtoStudent("Neha", "Computer Science");
const classStudent = new Student("Neha", "Computer Science");

console.log("--- Prototype version ---");
protoStudent.printDetails();
console.log("--- Class version ---");
classStudent.printDetails();

console.log("\n--- Same behaviour check ---");
console.log("Same own properties:", JSON.stringify(Object.keys(protoStudent)) === JSON.stringify(Object.keys(classStudent)));
console.log("Methods live on prototype (proto):", !Object.hasOwn(protoStudent, "printName"));
console.log("Methods live on prototype (class):", !Object.hasOwn(classStudent, "printName"));
console.log("Chain (proto):", Object.getPrototypeOf(ProtoStudent.prototype) === ProtoPerson.prototype);
console.log("Chain (class):", Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log("typeof class:", typeof Student, "(classes are syntactic sugar over constructor functions)");

// One real difference: classes cannot be called without `new`
try { Student("x", "y"); } catch (e) { console.log(`Class without new -> ${e.name}: ${e.message}`); }
