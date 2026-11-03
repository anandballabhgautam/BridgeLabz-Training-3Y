"use strict";
// Q3 - Library Management System
// Usage: node q3_library_system.js [ISBN]   (default demo ISBN is used when none is given)

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false; // every new book starts as available
  }

  issueBook() {
    if (this.isIssued) return `"${this.title}" is already issued.`;
    this.isIssued = true;
    return `"${this.title}" issued successfully.`;
  }

  returnBook() {
    if (!this.isIssued) return `"${this.title}" was not issued.`;
    this.isIssued = false;
    return `"${this.title}" returned successfully.`;
  }
}

const library = [
  new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509"),
  new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244")
];

function displayAvailableBooks() {
  const available = library.filter((book) => !book.isIssued);
  console.log(`Available books (${available.length}):`);
  available.forEach((book) => console.log(`  ${book.isbn} | ${book.title} by ${book.author}`));
}

// Searches by ISBN and issues the book
function issueBookByIsbn(isbn) {
  const book = library.find((b) => b.isbn === isbn.trim()); // find() returns undefined if no match
  if (!book) return `No book found with ISBN ${isbn}`;
  return book.issueBook();
}

console.log("=== Q3: Library Management ===");
displayAvailableBooks();

const requestedIsbn = process.argv[2] || "978-0132350884"; // "user input" from command line
console.log(`\nUser searches ISBN: ${requestedIsbn}`);
console.log(issueBookByIsbn(requestedIsbn));
console.log("Try again:", issueBookByIsbn(requestedIsbn));  // already issued
console.log("Unknown ISBN:", issueBookByIsbn("000-0000000000"));

console.log("\nAfter issuing:");
displayAvailableBooks();

console.log("\nReturning the book...");
console.log(library.find((b) => b.isbn === requestedIsbn)?.returnBook() ?? "Not found");
displayAvailableBooks();
