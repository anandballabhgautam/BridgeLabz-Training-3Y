"use strict";
// Q8 - Custom dropdown (no <select>)

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const optionList = document.getElementById("optionList");

const options = ["JavaScript", "Python", "Java", "C++", "Go"];
options.forEach((optionText) => {
  const item = document.createElement("li");
  item.textContent = optionText;
  item.setAttribute("role", "option");
  optionList.appendChild(item);
});

function toggleDropdown() {
  optionList.hidden = !optionList.hidden;
}

// Button shows/hides the list
dropdownButton.addEventListener("click", toggleDropdown);

// Clicking an option updates the button text and closes the list (delegation on the list)
optionList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = event.target.textContent;
    optionList.hidden = true;
  }
});

// CAPTURING PHASE: the third argument `true` makes this listener run on the way DOWN to the target,
// before any bubbling handlers. So the dropdown closes first, even if some other element
// stops propagation of its own click.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    optionList.hidden = true; // click happened outside the dropdown
  }
}, true);
