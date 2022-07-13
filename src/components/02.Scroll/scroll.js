// Прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__item-link[data-goto]");
if (menuLinks.length > 0) {
   menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (
         menuLink.dataset.goto &&
         document.querySelector(menuLink.dataset.goto)
      ) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top +
            pageYOffset -
            document.querySelector("header").offsetHeight;

         if (menu.classList.contains("active")) {
            document.body.classList.remove("locked");
            menu.classList.remove("active");
            burger.classList.remove("active");
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
         });
         e.preventDefault();
      }
   }
}
