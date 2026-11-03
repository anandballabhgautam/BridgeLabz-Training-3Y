"use strict";
// Q5 - Movie Ticket Booking (Objects + RegExp)

const patterns = {
  name: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  seats: /^([1-9]|10)$/ // 1 to 9, or 10
};

// Returns an array of error messages (empty = valid)
function validateBooking(name, email, seats) {
  const errors = [];
  if (!patterns.name.test(name)) errors.push("Name must contain alphabets only");
  if (!patterns.email.test(email)) errors.push("Enter a valid email address");
  if (!patterns.seats.test(seats)) errors.push("Seats must be a whole number from 1 to 10");
  return errors;
}

if (typeof document !== "undefined") {
  const form = document.getElementById("bookingForm");
  const errorBox = document.getElementById("errors");
  const ticketBox = document.getElementById("ticket");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const seats = form.elements.seats.value.trim();

    const errors = validateBooking(name, email, seats);
    if (errors.length > 0) {
      errorBox.innerHTML = errors.map((message) => `<div>${message}</div>`).join("");
      ticketBox.textContent = "";
      return;
    }
    errorBox.textContent = "";

    // Store booking info in an object
    const booking = { name, email, seats: Number(seats) };
    ticketBox.className = "ticket";
    ticketBox.textContent = `🎟 TICKET CONFIRMED\nName : ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log("Booking stored:", booking);
  });
}

if (typeof module !== "undefined") module.exports = { validateBooking };
