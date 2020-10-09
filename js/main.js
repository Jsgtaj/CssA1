const header = document.querySelector("header");
let lastPoint = null;
const navLinks = header.querySelectorAll("#locNav > li > a");

function toggHead() {
  const currentPoint = window.pageYOffset;
  lastPoint < currentPoint ? header.classList.add("hidden") : header.classList.remove("hidden");
  lastPoint = currentPoint;
}
function hideHead() {
  header.classList.add("hidden");
}
window.addEventListener("wheel", toggHead);
window.addEventListener("touchstart", toggHead);
navLinks.forEach(nav => nav.addEventListener("click", hideHead));
