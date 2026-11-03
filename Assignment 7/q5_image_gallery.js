"use strict";
// Q5 - Image Gallery with Modal Preview
// Images are generated inline as SVG data URIs so the gallery works offline (no external files needed).

const imageColors = ["#e57373", "#64b5f6", "#81c784", "#ffb74d", "#ba68c8", "#4db6ac"];

function createImageSource(color, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${color}"/>
    <text x="400" y="330" font-size="120" font-family="sans-serif" fill="#fff" text-anchor="middle">${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const gallery = document.getElementById("gallery");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

imageColors.forEach((color, index) => {
  const image = document.createElement("img");
  image.src = createImageSource(color, `Image ${index + 1}`);
  image.alt = `Gallery image ${index + 1}`;
  gallery.appendChild(image);
});

function openModal(source, altText) {
  modalImage.src = source;
  modalImage.alt = altText;
  modalOverlay.hidden = false;
}
function closeModal() {
  modalOverlay.hidden = true;
}

// Delegation: one listener on the grid; only <img> clicks matter
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") openModal(event.target.src, event.target.alt);
});

// Clicking the dark overlay (outside the modal box) closes it
modalOverlay.addEventListener("click", closeModal);

// Clicks inside the modal box must NOT bubble up to the overlay, otherwise they would close it
modalContent.addEventListener("click", (event) => event.stopPropagation());

// Bonus: Escape closes too
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
