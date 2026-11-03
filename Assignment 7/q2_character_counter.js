"use strict";
// Q2 - Live Character Counter

const MAX_CHARACTERS = 100;
const WARNING_THRESHOLD = 20; // yellow at 20 or fewer remaining

const textArea = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

function updateCounter() {
  const remaining = MAX_CHARACTERS - textArea.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= WARNING_THRESHOLD && remaining > 0); // yellow
  counter.classList.toggle("limit", remaining <= 0);                                    // red
}

// Keys that never add characters and must stay allowed so the user can delete/move
function isEditingKey(event) {
  return event.key.length > 1 || event.ctrlKey || event.metaKey; // "Backspace", "ArrowLeft"... or shortcuts like Ctrl+C
}

textArea.addEventListener("keydown", (event) => {
  const hasSelection = textArea.selectionStart !== textArea.selectionEnd; // typing over a selection replaces it
  const atLimit = textArea.value.length >= MAX_CHARACTERS;
  const isPrintable = !isEditingKey(event) || event.key === "Enter";
  if (atLimit && isPrintable && !hasSelection) {
    event.preventDefault(); // blocks the character from being typed
  }
});

// Paste could bypass keydown, so trim pasted text to what still fits
textArea.addEventListener("paste", (event) => {
  const pasted = event.clipboardData.getData("text");
  const available = MAX_CHARACTERS - (textArea.value.length - (textArea.selectionEnd - textArea.selectionStart));
  if (pasted.length > available) {
    event.preventDefault();
    textArea.setRangeText(pasted.slice(0, Math.max(available, 0)), textArea.selectionStart, textArea.selectionEnd, "end");
    updateCounter();
  }
});

// Safety net (mobile keyboards, drag-and-drop): never allow more than the max
textArea.addEventListener("input", () => {
  if (textArea.value.length > MAX_CHARACTERS) textArea.value = textArea.value.slice(0, MAX_CHARACTERS);
  updateCounter();
});

resetButton.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
  textArea.focus();
});

updateCounter();
