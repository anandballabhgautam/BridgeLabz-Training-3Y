"use strict";

// Q7 – Banking Application (private fields)
class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) throw new RangeError("Initial balance cannot be negative");
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new RangeError("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new RangeError("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: ₹${this.#balance}, requested: ₹${amount}`);
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log("Initial balance: ₹" + account.getBalance());

// Valid deposits
account.deposit(500);
console.log("After depositing 500: ₹" + account.getBalance());
account.deposit(250);
console.log("After depositing 250: ₹" + account.getBalance());

// Valid withdrawal
account.withdraw(300);
console.log("After withdrawing 300: ₹" + account.getBalance());

// Invalid withdrawals
for (const amount of [5000, -100]) {
  try {
    account.withdraw(amount);
  } catch (error) {
    console.log(`Withdraw ${amount} failed: ${error.message}`);
  }
}

// Invalid deposit
try {
  account.deposit(0);
} catch (error) {
  console.log(`Deposit failed: ${error.message}`);
}

console.log("Final balance: ₹" + account.getBalance());
// account.#balance would be a SyntaxError: private fields cannot be accessed outside the class.
