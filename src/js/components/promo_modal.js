{
  const overlay = document.getElementById("promo-overlay");
  const modal = document.getElementById("promo-modal");
  const closeBtn = document.getElementById("promo-close");
  const dismiss = document.getElementById("promo-dismiss");
  const cta = document.getElementById("promo-cta");

  function closeModal() {
    overlay.classList.add("hidden");
  }

  closeBtn.addEventListener("click", closeModal);
  dismiss.addEventListener("click", closeModal);
  cta.addEventListener("click", () => {
    window.location.href = "/offerta"; // cambia con il tuo link
  });

  // click fuori dal modal
  overlay.addEventListener("click", function (e) {
    if (!modal.contains(e.target)) closeModal();
  });

  // countdown
  let seconds = 172800;
  const countdownEl = document.getElementById("promo-countdown");

  function updateCountdown() {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");

    countdownEl.textContent = h + ":" + m + ":" + s;

    if (seconds > 0) seconds--;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
