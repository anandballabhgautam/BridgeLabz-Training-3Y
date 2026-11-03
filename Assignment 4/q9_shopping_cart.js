"use strict";
// Q9 - Shopping Cart with RegExp coupon

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    if (price < 0 || quantity < 1) throw new RangeError("Invalid price or quantity");
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Coupon format: SAVE or DISC followed by exactly two digits (e.g. SAVE20, DISC10)
  // Capture group (\d{2}) extracts the percentage.
  applyCoupon(code) {
    const couponPattern = /^(?:SAVE|DISC)(\d{2})$/;
    const match = couponPattern.exec(code.trim().toUpperCase());
    if (!match) {
      this.discountPercent = 0;
      return `Invalid coupon "${code}". Use format like SAVE20 or DISC10.`;
    }
    this.discountPercent = Number(match[1]);
    return `Coupon ${code.toUpperCase()} applied: ${this.discountPercent}% off`;
  }

  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

console.log("=== Q9: Shopping Cart ===");
const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 599, 2);
cart.addItem("USB Cable", 199, 3);

cart.items.forEach((item) => console.log(`${item.name.padEnd(10)} Rs.${item.price} x ${item.quantity} = Rs.${item.price * item.quantity}`));
console.log(`Total (no coupon): Rs.${cart.getTotal()}`);

for (const code of ["SAVE20", "DISC10", "save15", "SAVE2", "HELLO", "SAVE200"]) {
  console.log(`\nTrying coupon: ${code}`);
  console.log(cart.applyCoupon(code));
  console.log(`Final total: Rs.${cart.getFinalTotal().toFixed(2)}`);
}
