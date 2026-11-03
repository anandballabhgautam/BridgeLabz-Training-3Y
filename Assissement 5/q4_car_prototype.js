"use strict";
// Q4 - Constructor function and shared prototype method
console.log("=== Q4: Car constructor ===");

function Car(brand, model) {
  this.brand = brand; // own properties: separate for every object
  this.model = model;
}

// Defined ONCE on Car.prototype, shared by every Car instance (saves memory).
Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");
car1.getDetails();
car2.getDetails();

// Proof of sharing:
console.log("Same method object shared?", car1.getDetails === car2.getDetails); // true
console.log("getDetails is own property of car1?", Object.hasOwn(car1, "getDetails")); // false
console.log("car1.__proto__ === Car.prototype?", Object.getPrototypeOf(car1) === Car.prototype); // true
