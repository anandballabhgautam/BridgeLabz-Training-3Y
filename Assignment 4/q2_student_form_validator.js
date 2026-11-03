"use strict";
// Q2 - Student Form Validator (RegExp)

// Each rule: RegExp + error message
const validationRules = {
  name: { pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: "Name must contain alphabets only (spaces allowed between words)" },
  email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email like example@domain.com" },
  phone: { pattern: /^\d{10}$/, message: "Phone must be exactly 10 digits" },
  // Lookaheads (?=...) check that each requirement appears somewhere without consuming characters
  password: { pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Password needs 1 uppercase letter, 1 number and 1 special character" }
};

function validateField(fieldName, value) {
  return validationRules[fieldName].pattern.test(value);
}

// ---- DOM part (runs only in a browser) ----
if (typeof document !== "undefined") {
  const form = document.getElementById("studentForm");
  const result = document.getElementById("result");

  function showFieldState(input) {
    const isValid = validateField(input.name, input.value);
    const errorElement = document.getElementById(`${input.name}Error`);
    input.classList.toggle("valid", isValid);     // green border
    input.classList.toggle("invalid", !isValid);  // red border
    errorElement.textContent = isValid ? "" : validationRules[input.name].message;
    return isValid;
  }

  // Validate live while typing
  form.querySelectorAll("input").forEach((input) => input.addEventListener("input", () => showFieldState(input)));

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload
    const allValid = [...form.querySelectorAll("input")].map(showFieldState).every(Boolean);
    result.textContent = allValid ? "Registration successful!" : "Please fix the errors above.";
    result.className = allValid ? "success" : "error";
  });
}

if (typeof module !== "undefined") module.exports = { validateField, validationRules };
