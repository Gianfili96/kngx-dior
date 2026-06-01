window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if(window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
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
