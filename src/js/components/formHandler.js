import emailjs from "@emailjs/browser";

// INIT EMAILJS
emailjs.init({
  publicKey: "rQvIrVnT9j_t0ds7y",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm("service_0vcgdjg", "template_yn0pppr", form);

    alert("Message sent successfully!");

    form.reset();
  } catch (error) {
    console.error("Status:", error.status);
    console.error("Text:", error.text);
    alert(`Errore ${error.status}: ${error.text}`);
  }
});
