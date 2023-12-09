// console.log(document.querySelector("body").textContent);
const article = document.querySelector("article");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  sendResponse(article.textContent);
});
