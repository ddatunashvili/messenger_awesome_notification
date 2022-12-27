window.addEventListener("DOMNodeInserted", (event) => {
  console.log(event.target);
    try {
    const hasClass = event.target.getAttribute("aria-label") == "Mark as read";
    if (hasClass) {
      var myAudio = new Audio(chrome.runtime.getURL("roblox_death.mp3"));
      // myAudio.volume = 0.1;
      myAudio.play();
    }
  } catch {}
});
