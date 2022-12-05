window.addEventListener("DOMNodeInserted", (event) => {
    try {
    const hasClass = event.target.getAttribute("aria-label") == "Mark as read";
    const hasClassge = event.target.getAttribute("aria-label") == "წაკითხულად მონიშვნა";
    if (hasClass || hasClassge){
      var myAudio = new Audio(chrome.runtime.getURL("aah.mp3"));
      myAudio.volume = 0.1;
      myAudio.play();
    }
  } catch {}
});
