import emailjs from "@emailjs/browser";

// INIT EMAILJS
emailjs.init({
  publicKey: "zuRkRbH2jCQatszwO",
});

const form = document.getElementById("contact-form");
const feedback = document.createElement("p");
feedback.style.cssText = `
  margin-top: 16px;
  font-family: Inter;
  font-size: 14px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 10px 20px;
  border-radius: 8px;
  color: #ffffff;
`;
form.insertAdjacentElement("afterend", feedback);

function showFeedback(message, isError = false) {
  feedback.textContent = message;
  feedback.style.backgroundColor = isError ? "#e24b4a" : "#1d9e75";
  feedback.style.opacity = "1";

  setTimeout(() => {
    feedback.style.opacity = "0";
  }, 6000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm("service_jvhh4s7", "template_08dc78g", form);
    showFeedback("✓ Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("Status:", error.status);
    console.error("Text:", error.text);
    showFeedback(`✕ Error ${error.status}: ${error.text}`, true);
  }
});
