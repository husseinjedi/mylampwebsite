var btn = document.getElementById("btn");
var light = document.getElementById("light");

function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("on");
}

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
