"use strict";
// Q4 - Theme Switcher using setAttribute()

const THEMES = ["light", "dark", "blue"];
const themeButtons = document.getElementById("themeButtons");
const currentThemeLabel = document.getElementById("currentTheme");

function applyTheme(themeName) {
  // Class applied with setAttribute (replaces the whole class attribute)
  document.body.setAttribute("class", `theme-${themeName}`);
  // Current theme also stored in a custom data attribute
  document.body.setAttribute("data-theme", themeName);
  currentThemeLabel.textContent = `Current theme: ${document.body.getAttribute("data-theme")}`;
}

// Build buttons from the THEMES array; setAttribute used for button attributes too
THEMES.forEach((themeName) => {
  const button = document.createElement("button");
  button.textContent = themeName[0].toUpperCase() + themeName.slice(1);
  button.setAttribute("type", "button");
  button.setAttribute("data-theme-choice", themeName);
  themeButtons.appendChild(button);
});

// One delegated listener for all theme buttons
themeButtons.addEventListener("click", (event) => {
  const choice = event.target.getAttribute("data-theme-choice");
  if (choice) applyTheme(choice);
});

applyTheme("light");
