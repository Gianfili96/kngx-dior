const descriptions = {
  basic: {
    title: "WHY PLUS?",
    text: "The Basic license is perfect if you're just starting out.",
    text1:
      "It gives you access to high-quality untagged files at an affordable price, ideal for independent artists releasing music on streaming platforms with a limited budget.",
    text2:
      "With 200,000 streams allowed, it covers most independent releases without any issues.",
  },
  premium: {
    title: "WHY PLUS?",
    text: "The Basic license is perfect if you're just starting out.",
    text1:
      "It gives you access to high-quality untagged files at an affordable price, ideal for independent artists releasing music on streaming platforms with a limited budget.",
    text2:
      "With 200,000 streams allowed, it covers most independent releases without any issues.",
  },
  premiumPlus: {
    title: "WHY PLUS?",
    text: "The Basic license is perfect if you're just starting out.",
    text1:
      "It gives you access to high-quality untagged files at an affordable price, ideal for independent artists releasing music on streaming platforms with a limited budget.",
    text2:
      "With 200,000 streams allowed, it covers most independent releases without any issues.",
  },
  unlimited: {
    title: "WHY PLUS?",
    text: "The Basic license is perfect if you're just starting out.",
    text1:
      "It gives you access to high-quality untagged files at an affordable price, ideal for independent artists releasing music on streaming platforms with a limited budget.",
    text2:
      "With 200,000 streams allowed, it covers most independent releases without any issues.",
  },
};

function attachClick(card) {
  const btn = card.querySelector(".btn_license a");
  const originalHTML = card.innerHTML;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const desc = descriptions[card.dataset.plan];

    card.style.transition = "opacity 0.25s ease";
    card.style.opacity = "0";

    setTimeout(() => {
      card.innerHTML = `
        <div class="title">${desc.title}</div>
        <div class="description">
          <p>${desc.text}</p>
          <br>
          <p>${desc.text1}</p>
          <br>
          <p>${desc.text2}</p>
        </div>
        <div class="btn_license"><a href="" class="btn_back">← Go back</a></div>
      `;
      card.style.opacity = "1";

      card.querySelector(".btn_back").addEventListener("click", (e) => {
        e.preventDefault();

        card.style.opacity = "0";
        setTimeout(() => {
          card.innerHTML = originalHTML;
          card.style.opacity = "1";
          attachClick(card);
        }, 200);
      });
    }, 250);
  });
}

document.querySelectorAll("[data-plan]").forEach((card) => attachClick(card));