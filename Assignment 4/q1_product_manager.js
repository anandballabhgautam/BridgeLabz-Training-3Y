"use strict";
// Q1 - E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduces price by the given percentage (e.g. 10 -> 10% off). Returns the new price.
  applyDiscount(percent) {
    if (percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100");
    }
    this.price = this.price - (this.price * percent) / 100;
    return this.price;
  }

  // Formatted string with product details
  getDetails() {
    return `#${this.id} | ${this.name.padEnd(12)} | ${this.category.padEnd(12)} | Rs.${this.price.toFixed(2)}`;
  }
}

console.log("=== Q1: Product Manager ===");
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Smartphone", 18000, "Electronics"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Headphones", 1500, "Accessories"),
  new Product(6, "Desk Chair", 4500, "Furniture")
];

console.log("\nAll products:");
products.forEach((product) => console.log(product.getDetails()));

// Apply 10% discount to one product
const laptop = products[0];
console.log(`\nApplying 10% discount to ${laptop.name}...`);
laptop.applyDiscount(10);
console.log(laptop.getDetails());

// filter() builds a NEW array with only the products where the callback returns true
const expensiveProducts = products.filter((product) => product.price > 1000);
console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((product) => console.log(product.getDetails()));
console.log(`Count: ${expensiveProducts.length}`);
