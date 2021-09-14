function injectImg() {
  const drinkPleaseDiv = document.createElement('div');
  document.body.appendChild(drinkPleaseDiv);
  drinkPleaseDiv.id = 'drinkPlease';
  drinkPleaseDiv.style = 'z-index:2147483647; position:fixed; width: 100%; height:100vh; top:0;';
  drinkPleaseDiv.insertAdjacentHTML('afterbegin', '<img src="https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif" id="img" style="width: 100px;height: 100px; display: flex; max-width: 100%; align-items: center; margin:auto;">');
}

function injectJavascript(increaseSize = 100, increaseSpeed = 100, MaxSize = 1300, MinSize = 100) {
  const img = document.getElementById('img');
  let i = increaseSize;
  return setInterval(() => {
    if (parseFloat(img.style.width) > MaxSize || parseFloat(img.style.height) > MaxSize) i *= -1;
    if (parseFloat(img.style.width) < MinSize || parseFloat(img.style.height) < MinSize) i *= -1;
    img.style.width = `${`${parseFloat(img.style.width) + (i)}`.toString()}px`;
    img.style.height = `${`${parseFloat(img.style.height) + (i)}`.toString()}px`;
  }, increaseSpeed);
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  switch (message.action) {
    case 'injectImg':
      await injectImg();
      injectJavascript();
      sendResponse('inject image success');
      break;
    default:
      sendResponse('no match');
  }
});

chrome.storage.local.get(['status'], (result) => {
  if (result.status === 'drinking') {
    injectImg();
    injectJavascript();
  }
});
