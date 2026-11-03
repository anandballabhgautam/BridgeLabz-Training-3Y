"use strict";
// Q6 - Fetch and display products from Fake Store API
// Needs Node 18+ (built-in fetch) or a browser console. For the HTML cards bonus open q6_bonus_cards.html.

const PRODUCTS_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  const response = await fetch(PRODUCTS_URL);
  // fetch does NOT reject on HTTP errors like 404/500, so check response.ok manually
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return response.json();
}

function displayProducts(products) {
  for (const product of products) {
    console.log(`Product: ${product.title}`);
    console.log(`Price: $${product.price}`);
    console.log(`Image: ${product.image}`);
    console.log("");
  }
}

async function main() {
  console.log("=== Q6: Product Card Fetcher ===");
  try {
    const products = await fetchProducts();
    displayProducts(products);
    console.log(`Loaded ${products.length} products`);
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log(`(Technical detail: ${error.message})`);
  }
}

main();

module.exports = { fetchProducts, displayProducts }; // exported so the logic can be tested with a mock
