const overlay = document.getElementById("promo-overlay");
const modal = document.getElementById("promo-modal");
const closeBtn = document.getElementById("promo-close");
const dismiss = document.getElementById("promo-dismiss");
const cta = document.getElementById("promo-cta");

// --- modal ---

function closeModal() {
  overlay.classList.add("hidden");
}

closeBtn.addEventListener("click", closeModal);
dismiss.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (!modal.contains(e.target)) closeModal();
});

cta.addEventListener("click", () => {
  closeModal();
  window.location.href = "index.html#beatstore";
});

// --- countdown ---

const countdownEl = document.getElementById("promo-countdown");
let seconds = 7200;

function updateCountdown() {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  countdownEl.textContent = `${h}:${m}:${s}`;
  if (seconds > 0) seconds--;
}

updateCountdown();
setInterval(updateCountdown, 1000);
