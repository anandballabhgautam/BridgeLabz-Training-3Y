"use strict";

// Q5 – Ride-Sharing Application
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle; // e.g. { model, number }
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance is not provided");
    }
    if (typeof this.distance !== "number" || Number.isNaN(this.distance)) {
      throw new TypeError("Distance must be a number");
    }
    if (this.distance < 0) {
      throw new RangeError("Distance cannot be negative");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + this.distance * perKm;
  }
}

const rider = new User("Amit", 4.8);
const driver = new Driver("Ravi", 4.9, { model: "Swift Dzire", number: "UP85 AB 1234" });
console.log(`Rider: ${rider.name} (${rider.rating}) | Driver: ${driver.name} (${driver.rating}), ${driver.vehicle.model} ${driver.vehicle.number}`);

const trips = [
  new Trip("Mathura", "Vrindavan", 12),
  new Trip("Mathura", "Agra", -5),
  new Trip("Mathura", "Delhi")
];

trips.forEach((trip) => {
  try {
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Fare = ₹${trip.calculateFare()}`);
  } catch (error) {
    console.log(`${trip.fromLocation} -> ${trip.toLocation}: Error - ${error.message}`);
  }
});
