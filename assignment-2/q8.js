/**
 * Q8. Dynamic Discount Evaluator
 * Requirements:
 * - Use an array of objects: cart
 * - If category = "electronics" -> 10% discount
 * - If category = "fashion" -> 5% discount
 * - If total cart value > 50000 -> apply extra 5% overall discount.
 * - Use loops, conditionals, and reduce() to calculate the final total.
 */

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("--- Q8: Dynamic Discount Evaluator ---");

// Step 1: Calculate discounted item prices using loop/mapping logic
let itemDiscountedTotal = 0;

cart.forEach(cartItem => {
    let categoryDiscountRate = 0;
    
    if (cartItem.category === "electronics") {
        categoryDiscountRate = 0.10; // 10% discount
    } else if (cartItem.category === "fashion") {
        categoryDiscountRate = 0.05; // 5% discount
    }
    
    const discountedPrice = cartItem.price * (1 - categoryDiscountRate);
    itemDiscountedTotal += discountedPrice;
    
    console.log(`Item: ${cartItem.item} | Category: ${cartItem.category} | Original Price: ₹${cartItem.price} | Category Discount: ${categoryDiscountRate * 100}% | Price After Category Discount: ₹${discountedPrice}`);
});

// Calculate raw total using reduce()
const rawTotal = cart.reduce((sum, currentItem) => sum + currentItem.price, 0);

// Step 2: Check for overall threshold discount (> 50000)
let overallDiscountRate = 0;
if (rawTotal > 50000) {
    overallDiscountRate = 0.05; // Extra 5% overall discount
}

const finalPrice = itemDiscountedTotal * (1 - overallDiscountRate);

console.log("-------------------------------------------------------");
console.log(`Raw Total Price                 : ₹${rawTotal}`);
console.log(`Subtotal After Category Discount: ₹${itemDiscountedTotal}`);
console.log(`Extra Overall Discount (>50,000): ${overallDiscountRate * 100}%`);
console.log(`Final Payable Amount            : ₹${finalPrice.toFixed(2)}`);
