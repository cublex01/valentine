 const allowedNames = ["nunu","tyla", "ina"];
    let userName = "";

    const loginScreen = document.getElementById("loginScreen");
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const reactionImg = document.getElementById("reactionImg");
    const messagesDiv = document.getElementById("messages");

    const noImages = [
      "bubu-dudu-sseeyall.gif",
      "heart.gif",
      "bubu-sleep.gif"
    ];

    let step = 0;

    const sizes = [
      { w: 220, h: 70 },
      { w: 260, h: 85 },
      { w: 300, h: 100 },
      { w: "90vw", h: "30vh" },
      { w: "100vw", h: "100vh", fullscreen: true }
    ];

    loginBtn.onclick = () => {
      const val = nameInput.value.trim().toLowerCase();
      if (!allowedNames.includes(val)) {
        error.textContent = "Enter the correct name 💔";
        return;
      }
      userName = val.charAt(0).toUpperCase() + val.slice(1);
      loginScreen.classList.add("hidden");
      screen1.classList.remove("hidden");
    };

    /* ✅ FIXED NO BUTTON */
    noBtn.onclick = () => {
      step++;

      if (step < sizes.length) {
        yesBtn.style.width = sizes[step].w;
        yesBtn.style.height = sizes[step].h;
      }

      reactionImg.src = noImages[Math.floor(Math.random() * noImages.length)];
      reactionImg.classList.remove("hidden");

      if (sizes[step]?.fullscreen) {
        yesBtn.classList.add("fullscreen");
        noBtn.classList.add("fall");
      }
    };

    yesBtn.onclick = () => {
      screen1.classList.add("hidden");
      screen2.classList.remove("hidden");

      const msgs = [
        "You just made my heart so happy 💖",
        `Thank you, ${userName} 💘`
      ];

      msgs.forEach((t, i) => {
        setTimeout(() => {
          const d = document.createElement("div");
          d.className = "message";
          d.textContent = t;
          messagesDiv.appendChild(d);
        }, i * 1200);
      });
    };