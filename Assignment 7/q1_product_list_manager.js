"use strict";
// Q1 - Dynamic Product List Manager (event delegation)

const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

let editingItem = null; // the <li> currently in edit mode (only one at a time)

function createButton(label, action, className) {
  const button = document.createElement("button");
  button.textContent = label;
  button.dataset.action = action; // data-action tells the delegated handler what to do
  if (className) button.className = className;
  return button;
}

function createProductItem(text) {
  const item = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.className = "item-text";
  textSpan.textContent = text; // textContent (not innerHTML) so user text can't inject HTML
  item.append(textSpan, createButton("Edit", "edit", "secondary"), createButton("Delete", "delete", "danger"));
  return item;
}

function startEdit(item) {
  if (editingItem && editingItem !== item) saveEdit(editingItem); // only one item editable at a time
  const textSpan = item.querySelector(".item-text");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = textSpan.textContent;
  textSpan.replaceWith(editInput);               // swap text for an input = inline editing
  const editButton = item.querySelector('[data-action="edit"]');
  editButton.textContent = "Save";
  editButton.dataset.action = "save";
  editInput.focus();
  editingItem = item;
}

function saveEdit(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) return;
  const textSpan = document.createElement("span");
  textSpan.className = "item-text";
  textSpan.textContent = editInput.value.trim() || editInput.defaultValue; // empty edit keeps the old text
  editInput.replaceWith(textSpan);
  const saveButton = item.querySelector('[data-action="save"]');
  saveButton.textContent = "Edit";
  saveButton.dataset.action = "edit";
  if (editingItem === item) editingItem = null;
}

// Add product
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = productInput.value.trim();
  if (text === "") return;
  productList.appendChild(createProductItem(text));
  productInput.value = "";
  productInput.focus();
});

// EVENT DELEGATION: one listener on <ul> handles clicks for every current AND future item.
productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]"); // works even if a child of the button was clicked
  if (!button) return;
  const item = button.closest("li");
  switch (button.dataset.action) {
    case "edit":   startEdit(item); break;
    case "save":   saveEdit(item); break;
    case "delete":
      if (editingItem === item) editingItem = null;
      item.remove();
      break;
  }
});

// Enter key inside an edit box saves it
productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) saveEdit(event.target.closest("li"));
});

// AUTO-SAVE: a click anywhere outside the item being edited saves it.
document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) saveEdit(editingItem);
});

// Starter data
["Laptop", "Keyboard", "Monitor"].forEach((name) => productList.appendChild(createProductItem(name)));
