browser.spacesToolbar.addButton('GoogleContacts', {
    title: "Google Contacts",
    defaultIcons: "skin/google_contacts_icon.svg",
    url: "https://contacts.google.com/"
});

browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0";
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://contacts.google.com/*", "https://*.google.com/*"] },
  ["blocking", "requestHeaders"]
);

// --- Updated Context Menu Code ---

// 1. Change contexts to "all" so the menu always appears
browser.menus.create({
  id: "search-google-contacts",
  title: "Search in Google Contacts",
  contexts: ["all"] 
});

// 2. Handle the click
browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-google-contacts") {
    let query = "";

    // Check if the user highlighted text first (Highest Priority)
    if (info.selectionText) {
      query = info.selectionText.trim();
    } 
    // If no text is highlighted, check if they right-clicked an actual link
    else if (info.linkUrl) {
      if (info.linkUrl.startsWith("mailto:")) {
        query = info.linkUrl.replace("mailto:", "").split("?")[0];
      } else if (info.linkUrl.startsWith("tel:")) {
        query = info.linkUrl.replace("tel:", "");
      } else if (info.linkText) {
        query = info.linkText.trim();
      }
    }

    // Only open the tab if we successfully extracted a query
    if (query) {
      const cleanQuery = decodeURIComponent(query);
      const searchUrl = `https://contacts.google.com/search/${encodeURIComponent(cleanQuery)}`;
      
      browser.tabs.create({ url: searchUrl });
    }
  }
});
