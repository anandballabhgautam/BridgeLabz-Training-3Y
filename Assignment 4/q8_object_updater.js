"use strict";
// Q8 - Dynamic Object Updater
// The object lives in memory; the form edits it and the page re-renders it.

const user = { name: "John", email: "john@mail.com", age: 21 };

function renderUser() {
  document.getElementById("userOutput").textContent = JSON.stringify(user, null, 2);
}

if (typeof document !== "undefined") {
  const form = document.getElementById("userForm");
  const status = document.getElementById("status");

  // Fill form with current values
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.age.value = user.age;
  renderUser();

  function updateUserFromForm() {
    user.name = form.elements.name.value;
    user.email = form.elements.email.value;
    // Keep age numeric; ignore empty/invalid input so the object never holds NaN
    const parsedAge = Number(form.elements.age.value);
    if (form.elements.age.value.trim() !== "" && !Number.isNaN(parsedAge)) user.age = parsedAge;
    renderUser();
  }

  // "Real time": update on every keystroke...
  form.addEventListener("input", updateUserFromForm);
  // ...and also on submit (prevent page reload)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUserFromForm();
    status.textContent = "User object updated!";
    console.log("Updated user:", user);
  });
}
