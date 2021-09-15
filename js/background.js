async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function injectImg() {
  const tab = await getCurrentTab();
  const actionObject = {
    action: 'injectImg',
  };
  chrome.tabs.sendMessage(tab.id, actionObject, () => {
  });
  await chrome.storage.local.set({ status: 'drinking' });
  return true;
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  switch (request.event) {
    case 'injectImg':
      injectImg();
      sendResponse({ result: true });
      break;
    default:
      sendResponse({ result: false });
  }
});
