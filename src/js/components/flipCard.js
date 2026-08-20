const descriptions = {
  basic: {
    title: "WHY BASIC?",
    text: "BASIC — For Starting Out",
    text1:
      "The Basic License is a great choice if you’re just starting out and want to release your song without spending too much. You get an untagged MP3 and can distribute your track up to 2,000 copies, with up to 200,000 audio and video streams. It’s perfect for independent artists testing a new song, building their audience, or releasing music on a smaller scale.",
  },
  premium: {
    title: "WHY PREMIUM?",
    text: "PREMIUM — For Growing Artists",
    text1:
      "The Premium License is made for artists who are ready to take their music a step further. You get high-quality WAV and MP3 files, higher distribution and streaming limits, plus the ability to use the beat for radio on one station. If you already have an audience and expect your song to reach more people, this license gives you more room to grow without jumping straight to the highest-priced option.",
  },
  premiumPlus: {
    title: "WHY PLUS?",
    text: "PREMIUM PLUS — For Serious Releases",
    text1:
      "The Premium Plus License is ideal for artists planning a serious release with a bigger audience or promotional campaign. You get WAV and MP3 files, track stems for professional mixing, up to 10,000 distribution copies and 1,000,000 audio and video streams. You can also use the song for radio on up to two stations. If you’re confident in the song and want more flexibility for professional promotion, this is the perfect middle ground between a standard lease and an unlimited license.",
  },
  unlimited: {
    title: "WHY UNLIMITED?",
    text: "UNLIMITED — For Maximum Freedom",
    text1:
      "The Unlimited License is the best option if you want to release your song without worrying about distribution or streaming limits. You receive WAV and MP3 files, full track stems, unlimited distribution, unlimited audio and video streams, unlimited music videos, and unlimited radio stations. It’s recommended for artists who believe the song has major potential, plan to promote it heavily, or simply want the freedom to grow without hitting the limits of a standard license.",
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
