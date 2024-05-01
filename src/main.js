const menuHmab = document.querySelector(".menu-hamb");
const navList = document.querySelector(".nav-list");
const closeNav = document.querySelector(".close-nav");

menuHmab.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});

closeNav.addEventListener("click", () => {
  navList.classList.add("hidden");
});
