chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Block requests to known ad servers
      if (details.url.includes("doubleclick.net") || details.url.includes("googlesyndication.com")) {
        return { cancel: true };
      }
    },
    { urls: ["https://*.youtube.com/*"] },
    ["blocking"]
  );