
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    let button = document.getElementById('go'),
      center = UrlParser.parse(url);

    button.disabled = true;
    button.className = 'disabled';
    button.innerText = 'No Zillow Map Found';

    if (null !== center) {
      button.disabled = false;
      button.className = 'enabled';
      button.innerText = 'Explore on Google Maps';
      button.addEventListener('click', () => {
        chrome.tabs.create({active: true, url: center.toGoogleMapsUrl()});
      })
    }
  });
});

// function checkForValidUrl(tabId, changeInfo, tab) {
//   if (changeInfo.url) {
//     let center = UrlParser.parse(changeInfo.url);

//     if (null === center) {
//       // chrome.pageAction.hide();
//       chrome.browserAction.disable();
//     } else {
//       // chrome.pageAction.show();
//       chrome.browserAction.enable();
//     }
//   }
// }

// chrome.tabs.onUpdated.addListener(checkForValidUrl);
