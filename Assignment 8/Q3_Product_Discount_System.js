"use strict";

// Q3 – Product Discount System (constructor function + prototype)
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError("Discount must be between 0 and 100");
  }
  return this.price - (this.price * percent) / 100;
};

const products = [
  new Product("Laptop", 60000),
  new Product("Headphones", 2500),
  new Product("Keyboard", 1200)
];
const discounts = [10, 20, 5];

products.forEach((product, i) => {
  const newPrice = product.applyDiscount(discounts[i]);
  console.log(`${product.name}: ₹${product.price} -> ₹${newPrice} (${discounts[i]}% off)`);
});

// Abstraction: the caller only uses applyDiscount(percent).
// The calculation details are hidden inside the method, so the same
// call works for every product without repeating the formula.
