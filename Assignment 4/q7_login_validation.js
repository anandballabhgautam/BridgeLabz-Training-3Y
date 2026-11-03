"use strict";
// Q7 - Login form validation using RegExp

const usernamePattern = /^.{5,}$/;   // at least 5 characters
const passwordChecks = [
  { pattern: /^.{8,}$/, message: "Password must be at least 8 characters" },
  { pattern: /\d/, message: "Password must include a number" },
  { pattern: /[A-Z]/, message: "Password must include an uppercase letter" },
  { pattern: /[a-z]/, message: "Password must include a lowercase letter" },
  { pattern: /[^A-Za-z0-9]/, message: "Password must include a special character" }
];

// Returns a list of specific error messages
function validateLogin(username, password) {
  const errors = [];
  if (!usernamePattern.test(username)) errors.push("Username must be at least 5 characters");
  passwordChecks.forEach((check) => {
    if (!check.pattern.test(password)) errors.push(check.message);
  });
  return errors;
}

if (typeof document !== "undefined") {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = validateLogin(form.elements.username.value, form.elements.password.value);
    if (errors.length === 0) {
      message.className = "success";
      message.textContent = "Login successful!";
    } else {
      message.className = "error";
      message.innerHTML = errors.map((e) => `<div>• ${e}</div>`).join("");
    }
  });
}

if (typeof module !== "undefined") module.exports = { validateLogin };
