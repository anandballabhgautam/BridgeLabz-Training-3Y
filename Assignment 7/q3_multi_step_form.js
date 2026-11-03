"use strict";
// Q3 - Multi-Step Form

const steps = [
  { id: "step1", input: "nameInput",     error: "nameError",     validate: (v) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(v.trim()) ? "" : "Enter a valid name (letters only)" },
  { id: "step2", input: "emailInput",    error: "emailError",    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address" },
  { id: "step3", input: "passwordInput", error: "passwordError", validate: (v) => v.length >= 6 ? "" : "Password must be at least 6 characters" }
];

let currentStep = 0;
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const progress = document.getElementById("progress");
const summary = document.getElementById("summary");
const formArea = document.getElementById("formArea");

function showStep(index) {
  steps.forEach((step, i) => { document.getElementById(step.id).hidden = i !== index; });
  backButton.hidden = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Finish" : "Next";
  progress.textContent = `Step ${index + 1} of ${steps.length}`;
  document.getElementById(steps[index].input).focus();
}

// Returns true only if the current step's input is valid; shows the error otherwise
function validateCurrentStep() {
  const step = steps[currentStep];
  const message = step.validate(document.getElementById(step.input).value);
  document.getElementById(step.error).textContent = message;
  return message === "";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;     // stay on this step until valid
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) { currentStep--; showStep(currentStep); }
});

function showSummary() {
  formArea.hidden = true;
  progress.textContent = "All steps complete";
  const password = document.getElementById("passwordInput").value;
  summary.innerHTML = `
    <h2>Summary</h2>
    <p><strong>Name:</strong> <span id="sumName"></span></p>
    <p><strong>Email:</strong> <span id="sumEmail"></span></p>
    <p><strong>Password:</strong> ${"•".repeat(password.length)}</p>
    <p class="success">Registration complete!</p>`;
  // textContent for user-entered values keeps them safe from HTML injection
  document.getElementById("sumName").textContent = document.getElementById("nameInput").value.trim();
  document.getElementById("sumEmail").textContent = document.getElementById("emailInput").value.trim();
}

// Enter key = Next
formArea.addEventListener("keydown", (event) => { if (event.key === "Enter") nextButton.click(); });

showStep(0);
