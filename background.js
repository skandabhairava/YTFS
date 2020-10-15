console.log("YTFS background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
 var check = tab.url
 check = check.slice(0, 30);
 if (check === "https://www.youtube.com/watch?") {
  var str = tab.url
  var ur = str.slice(32, 43);
  str = "https://www.youtube.com/embed/"
  var res = str.concat(ur);
  chrome.tabs.create({ url: res });
 }

}