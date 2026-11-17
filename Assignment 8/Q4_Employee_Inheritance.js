"use strict";

// Q4 – Employee Inheritance & Runtime Polymorphism
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} team and planning projects.`;
  }
}

const people = [
  new Employee("Amit", "Development"),
  new Manager("Sara", "Development"),
  new Employee("Kiran", "HR"),
  new Manager("Rohan", "Sales")
];

// Same method call, different behavior decided at runtime.
people.forEach((person) => console.log(person.work()));
