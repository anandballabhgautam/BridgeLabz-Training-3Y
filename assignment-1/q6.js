/**
 * Q6. Progressive Discount System
 * Requirements:
 * - Input total purchase amount.
 * - Tiers: ≥10000 -> 25%, ≥5000 -> 15%, ≥2000 -> 5%, otherwise -> no discount.
 * - Calculate and print original total, discount percentage, final price after discount.
 * - Use Math.round() for rounding.
 */

const originalTotal = 12500;
let discountPercentage = 0;

if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = (originalTotal * discountPercentage) / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

console.log("--- Progressive Discount Summary ---");
console.log(`Original Total: ₹${originalTotal}`);
console.log(`Discount Applied: ${discountPercentage}%`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
