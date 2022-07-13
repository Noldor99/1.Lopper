// Мобильное меню бургер
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
function burgerMenu() {
   burger.addEventListener("click", () => {
      if (!menu.classList.contains("active")) {
         menu.classList.add("active");
         burger.classList.add("active");
         body.classList.add("locked");
      } else {
         menu.classList.remove("active");
         burger.classList.remove("active");
         body.classList.remove("locked");
      }
   });
   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
         menu.classList.remove("active");
         burger.classList.remove("active-burger");
         body.classList.remove("locked");
      }
   });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
   const nav = document.querySelector("nav");

   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
   const breakpoint = 1;
   if (window.scrollY >= breakpoint) {
      nav.classList.add("fixed__nav");
   } else {
      nav.classList.remove("fixed__nav");
   }
}
window.addEventListener("scroll", fixedNav);
