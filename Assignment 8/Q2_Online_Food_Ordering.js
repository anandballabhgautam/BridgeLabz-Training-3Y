"use strict";

// Q2 – Online Food Ordering (map + Error Handling)
const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Fries", price: 90 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map((name) => {
    const found = menu.find((m) => m.item.toLowerCase() === name.toLowerCase());
    if (!found) {
      throw new Error(`Invalid item ordered: "${name}" is not on the menu`);
    }
    return found.price;
  });

  return prices.reduce((total, price) => total + price, 0);
}

const orders = [
  ["Burger", "Fries"],
  ["Pizza", "Pasta", "Fries"],
  ["Burger", "Sushi"]
];

orders.forEach((order, index) => {
  try {
    const total = calculateBill(order);
    console.log(`Order ${index + 1} (${order.join(", ")}): Total = ₹${total}`);
  } catch (error) {
    console.log(`Order ${index + 1} failed: ${error.message}`);
  }
});
