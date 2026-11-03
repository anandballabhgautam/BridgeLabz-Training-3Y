"use strict";
// Q6 - Real-time table filter

const searchBox = document.getElementById("searchBox");
const tableBody = document.querySelector("#studentTable tbody");
const noResultsRow = document.getElementById("noResults");

function filterRows() {
  const searchText = searchBox.value.trim().toLowerCase(); // lowercase both sides = case-insensitive
  let visibleCount = 0;

  tableBody.querySelectorAll("tr[data-row]").forEach((row) => {
    const rowText = row.textContent.toLowerCase(); // matches Name, Branch or CGPA
    const isMatch = rowText.includes(searchText);
    row.hidden = !isMatch;
    if (isMatch) visibleCount++;
  });

  noResultsRow.hidden = visibleCount > 0;
}

searchBox.addEventListener("input", filterRows); // "input" fires on every keystroke, paste, and clear
