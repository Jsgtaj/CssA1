const header = document.querySelector("header");
let lastPoint = null;

function toggHead() {
  const currentPoint = window.pageYOffset;
  lastPoint < currentPoint ? header.classList.add("hidden") : header.classList.remove("hidden");
  lastPoint = currentPoint;
}
window.addEventListener("wheel", toggHead);
window.addEventListener("touchstart", toggHead);
