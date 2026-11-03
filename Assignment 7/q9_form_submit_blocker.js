"use strict";
// Q9 - Form submit blocker with live errors

const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

// Rule per field: returns an error message, or "" when the value is valid
const fieldRules = {
  name: (value) => (value.trim() === "" ? "Name is required" : ""),
  email: (value) => {
    if (value.trim() === "") return "Email is required";
    return value.includes("@") ? "" : "Email must contain @";
  },
  password: (value) => (value.length >= 6 ? "" : "Password must be at least 6 characters")
};

function validateField(input) {
  const message = fieldRules[input.name](input.value);
  document.getElementById(`${input.name}Error`).textContent = message;
  input.classList.toggle("invalid", message !== "");
  return message === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // always stop the browser's default submit/reload
  successMessage.textContent = "";

  // map (not forEach/some) so EVERY field is validated and every error is shown
  const results = [...form.querySelectorAll("input")].map(validateField);
  if (results.every(Boolean)) {
    successMessage.textContent = "Form Submitted Successfully";
    form.reset();
  }
});

// Live correction: once the user edits a field, re-check it so its error disappears automatically
// Only fields already showing an error are re-checked, so users aren't nagged while typing for the first time.
form.addEventListener("input", (event) => {
  if (event.target.classList.contains("invalid")) validateField(event.target);
  successMessage.textContent = "";
});
