const burgerMenu = document.querySelector("#burger-menu");
const collapsedNavbar = document.querySelector("#collapsed-navbar");
const closeNavbarBtn = document.querySelector("#close-mobile-nav");
const navbarCta = document.querySelector(".navbar-cta");
const navbarWrapper = document.querySelector(".navbar-wrapper");
const closeNoticeBar = document.querySelector(".close-notice-btn");
const topBar = document.querySelector(".top-bar");
const heroSection = document.querySelector(".hero");

closeNoticeBar.addEventListener("click", () => {
  topBar.style.transform = "translateY(-100%)";
  topBar.style.position = "absolute";
  heroSection.style.minHeight = "88vh";
});

burgerMenu.addEventListener("click", () => {
  collapsedNavbar.style.left = "0";
  document.body.style.overflow = "hidden";
});

closeNavbarBtn.addEventListener("click", () => {
  collapsedNavbar.style.left = "100%";
  document.body.style.overflow = "scroll";
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 780) {
    burgerMenu.style.order = "3";
  }
  if (window.innerWidth <= 780) {
    navbarCta.style.display = "flex";
    collapsedNavbar.appendChild(navbarCta);
  } else {
    navbarWrapper.appendChild(navbarCta);
    navbarCta.style.order = "2";
  }
});
