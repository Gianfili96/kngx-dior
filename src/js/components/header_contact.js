document.querySelectorAll(".has-dropdown").forEach((item) => {
  let timeout;

  item.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    item.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      item.classList.remove("active");
    }, 200);
  });
});

const hamburger = document.querySelector(".header_contact .hamburger");
const headerLicensing = document.querySelector(".header_contact");
const menuLinks = document.querySelectorAll(".header_contact .menu a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  headerLicensing.classList.toggle("mobile-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove("open");
      headerLicensing.classList.remove("mobile-open");
    }
  });
});
