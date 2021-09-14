const { getChromeLocalStorage, setChromeLocalStorage } = require('./chromeStorage');

async function eventHandler(event) {
  const eventObject = {
    event,
  };
  const response = await chrome.runtime.sendMessage(eventObject);
  return response;
}

function updateStatus(text) {
  const lableStatus = document.getElementById('extensionStatus');
  lableStatus.innerHTML = text;
  setChromeLocalStorage({ status: text });
}

function initEventListener() {
  const injectImg = document.getElementById('injectImg');
  const removeImg = document.getElementById('removeImg');

  injectImg.addEventListener('click', async () => {
    const result = await eventHandler('injectImg');
    console.log(result);
    return (result) ? updateStatus('drinking') : updateStatus('inject image fail');
  });

  removeImg.addEventListener('click', () => {
    setChromeLocalStorage({ status: 'not running' });
  });
}

async function syncPopupStatus() {
  const result = await getChromeLocalStorage(['status']);
  return (result) ? updateStatus(result.status) : updateStatus('not init');
}

function initPupup() {
  initEventListener();
  syncPopupStatus();
}

initPupup();
