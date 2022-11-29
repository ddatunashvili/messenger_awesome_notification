window.addEventListener("DOMNodeInserted", (event) => {
    try {
    const hasClass = event.target.getAttribute("aria-label") == "Mark as read";
    if (hasClass) {
      var myAudio = new Audio(chrome.runtime.getURL("aah.mp3"));
      myAudio.volume = 0.1;
      myAudio.play();
    }
  } catch {}
});
