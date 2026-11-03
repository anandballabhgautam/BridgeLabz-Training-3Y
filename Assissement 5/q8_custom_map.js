"use strict";
// Q8 - Custom Array.prototype.myMap
console.log("=== Q8: myMap ===");

// Use a normal function (not arrow) so `this` is the array calling myMap.
// Object.defineProperty makes it non-enumerable, so it won't show up in for...in loops.
Object.defineProperty(Array.prototype, "myMap", {
  value: function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }
    const result = [];
    for (let index = 0; index < this.length; index++) {
      if (index in this) { // skip holes in sparse arrays, like built-in map
        result[index] = callback.call(thisArg, this[index], index, this);
      }
    }
    return result;
  },
  writable: true,
  configurable: true
});

console.log("myMap :", [1, 2, 3].myMap((num) => num * 2)); // [2, 4, 6]
console.log("map   :", [1, 2, 3].map((num) => num * 2));   // same
console.log("with index:", ["a", "b"].myMap((v, i) => `${i}:${v}`));
console.log("Same as built-in?",
  JSON.stringify([5, 6, 7].myMap((n) => n + 1)) === JSON.stringify([5, 6, 7].map((n) => n + 1)));
try { [1].myMap("oops"); } catch (e) { console.log(`Caught ${e.name}: ${e.message}`); }
