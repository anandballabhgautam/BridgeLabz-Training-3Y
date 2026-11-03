"use strict";
// Q7 - Mouse coordinates logger

const trackingBox = document.getElementById("trackingBox");
const coordinateDisplay = document.getElementById("coordinates");

// Live clientX / clientY (position relative to the browser viewport)
trackingBox.addEventListener("mousemove", (event) => {
  coordinateDisplay.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("mouseleave", () => {
  coordinateDisplay.textContent = "Move the mouse inside the box";
});

// Double click drops a red dot where the click happened
trackingBox.addEventListener("dblclick", (event) => {
  const boxRect = trackingBox.getBoundingClientRect();
  // The dot is positioned relative to the box, so subtract the box's viewport offset
  const dotX = event.clientX - boxRect.left;
  const dotY = event.clientY - boxRect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;
  trackingBox.appendChild(dot);
  console.log(`Dot placed at box position (${dotX}, ${dotY})`);
});
