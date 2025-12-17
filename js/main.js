// header_nav
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
const navMenu = document.getElementById("navMenu");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("is-open");
  document.body.style.overflow = "";
});
