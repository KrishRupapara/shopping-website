const date = document.getElementById("year");
date.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".header__nav-toggle");
const headerLink = document.querySelectorAll(".header__link");
const headerContainer = document.querySelector(".header__container");
navToggle.addEventListener("click", () => {
  headerContainer.classList.toggle("header__show-links");
  navToggle.classList.toggle("header__nav-toggle-color");
});

headerLink.forEach((link) => {
  link.addEventListener("click", () => {
    headerContainer.classList.remove("header__show-links");
    navToggle.classList.remove("header__nav-toggle-color");
  });
});
