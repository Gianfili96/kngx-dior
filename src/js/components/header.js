window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".main-header");
const dropdownToggles = document.querySelectorAll(".has-dropdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  header.classList.toggle("mobile-open");
});

dropdownToggles.forEach((item) => {
  item.addEventListener("click", (e) => {
    // su mobile apre/chiude al click
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      item.classList.toggle("active");
    }
  });
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('open');
      header.classList.remove('mobile-open');
    }
  });
});
