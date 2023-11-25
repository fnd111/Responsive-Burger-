import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/utils.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/menu.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-menu.css";

const btnMobileMenu = document.querySelector(".header__bars");
const btnMobileMenuBar = document.querySelectorAll(".header__bar");
const mobileMenu = document.querySelector(".mobile-menu__nav");
const header = document.querySelector(".header__menu");

// open menu
btnMobileMenu.addEventListener("click", function () {
  btnMobileMenuBar.forEach((bar) => {
    bar.classList.toggle("active");
  });

  mobileMenu.classList.toggle("mobile-menu__active");
});

// window.addEventListener("click", function (e) {
//   if (mobileMenu.classList.contains("mobile-menu__active")) {
//     if (!mobileMenu.contains(e.target)) {
//       console.log("yoh");
//       btnMobileMenuBar.forEach((bar) => {
//         bar.classList.remove("active");
//       });

//       mobileMenu.classList.remove("mobile-menu__active");
//     }
//   }
//   if (btnMobileMenu.contains(e.target)) {
//     console.log("yeh");
//     btnMobileMenuBar.forEach((bar) => {
//       bar.classList.toggle("active");
//     });

//     mobileMenu.classList.toggle("mobile-menu__active");
//   }
// });
//   if (e.target === btnMobileMenu || e.target) {
//     btnMobileMenuBar.forEach((bar) => {
//       bar.classList.toggle("active");
//     });

//     mobileMenu.classList.toggle("mobile-menu__active");
//   }

//   if (!mobileMenu.contains(e.target) && !header.contains(e.target)) {
//     btnMobileMenuBar.forEach((bar) => {
//       bar.classList.remove("active");
//     });

//     mobileMenu.classList.remove("mobile-menu__active");
//   }
