// Navbar Fixed
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const fixedNav = navbar.offsetTop;

  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const button = document.querySelector(".fa-circle-arrow-up");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  windowPosition = window.scrollY > 300;
  button.classList.toggle("btn-active", windowPosition);

  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
});

// Dark Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
