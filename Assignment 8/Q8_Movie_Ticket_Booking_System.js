"use strict";

// Q8 – Movie Ticket Booking System
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Added to the prototype after the classes are defined.
MovieTicket.prototype.printTicket = function () {
  console.log(`Ticket -> Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`);
};

const t1 = new OnlineTicket("Pushpa 2", "A12", 300, 30);
const t2 = new OnlineTicket("Jawan", "C07", 250, 25);

// printTicket is not defined on OnlineTicket; it is found via the prototype chain.
t1.printTicket();
t2.printTicket();
console.log(`Total for ${t1.movieName}: ₹${t1.getTotalAmount()}`);
console.log(`Total for ${t2.movieName}: ₹${t2.getTotalAmount()}`);

console.log("Own property printTicket on t1?", Object.hasOwn(t1, "printTicket"));
console.log("Found in MovieTicket.prototype?", "printTicket" in MovieTicket.prototype);
console.log("Prototype chain works:", Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype);
