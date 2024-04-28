const menuHmab = document.querySelector(".menu-hamb");
const navList = document.querySelector(".nav-list");

menuHmab.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
