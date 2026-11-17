"use strict";

// Q6 – E-Commerce Inventory System
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 12 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 3 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 25 },
  { id: 5, name: "Rice (5kg)", category: "Grocery", price: 450, stock: 8 },
  { id: 6, name: "Cooking Oil", category: "Grocery", price: 180, stock: 2 }
];

function getLowStockProducts(items, limit = 5) {
  return items.filter((p) => p.stock < limit);
}

function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}

console.log("Low stock products:", getLowStockProducts(products).map((p) => `${p.name} (${p.stock})`));
console.log("Sorted by price:", sortProductsByPrice(products).map((p) => `${p.name}: ₹${p.price}`));
console.log("Total inventory value: ₹" + calculateTotalInventoryValue(products));
console.log("Grouped by category:");
const grouped = groupByCategory(products);
for (const category in grouped) {
  console.log(`  ${category}:`, grouped[category].map((p) => p.name));
}
