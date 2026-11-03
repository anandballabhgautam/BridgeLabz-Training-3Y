"use strict";
// Q3 - Arrow function vs normal function and `this`
console.log("=== Q3: this in arrow vs normal function ===");

const userArrow = {
  name: "Amit",
  // Arrow functions have NO own `this`. They use the `this` of the surrounding scope
  // (where the object literal was written), NOT the object that calls them.
  showName: () => {
    console.log("Arrow  -> this.name =", this.name);
  }
};
// Here the surrounding scope is the module/file top level:
//  - Node.js: `this` is module.exports ({}), so this.name is undefined.
//  - Browser (non-module script): `this` is window; window.name is "" (empty string).
// Object literal braces do NOT create a scope, so `userArrow` does not become `this`.
userArrow.showName();

const userFixed = {
  name: "Amit",
  // Normal methods get `this` from HOW they are called: userFixed.showName() -> this = userFixed
  showName: function () {
    console.log("Normal -> this.name =", this.name);
  }
};
userFixed.showName(); // Amit

// ES6 shorthand method is also a normal function:
const userShort = { name: "Amit", showName() { console.log("Short  -> this.name =", this.name); } };
userShort.showName();
