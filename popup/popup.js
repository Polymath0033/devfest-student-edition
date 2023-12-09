// const body = document.querySelector("body");
// chrome.tts.speak(body.textContent);
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
playButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, { type: "popup" }, (response) => {
      chrome.tts.speak(response);
      console.log(response);
    });
  });
});
stopButton.addEventListener("click", () => {
  chrome.tts.stop();
});
