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
