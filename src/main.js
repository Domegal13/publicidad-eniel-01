const menuHmab = document.querySelector(".menu-hamb");
const navList = document.querySelector(".nav-list");
const closeNav = document.querySelector(".close-nav");

menuHmab.addEventListener("click", () => {
  // navList.classList.toggle("hidden");
  navList.classList.toggle("translate-y-[1px]");
});

closeNav.addEventListener("click", () => {
  // navList.classList.add("hidden");
  navList.classList.remove("translate-y-[1px]");
});
