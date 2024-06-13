const hamburgerBtn = document.querySelector("#hamburger-icon")
const navLinks = document.querySelector(".nav--links-2")

function toggle() {
  navLinks.classList.toggle("hidden")

}

hamburgerBtn.addEventListener("click",toggle)