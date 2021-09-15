/**
 * @param  {Array} data the array that you want to get from chrome local storage e.g. ['status']
 */
async function getChromeLocalStorage(data) {
  const result = await chrome.storage.local.get(data);
  return result;
}

/**
 * @param  {Object} data the array that you want to get from chrome local storage e.g. ['status']
 */
async function setChromeLocalStorage(data) {
  const result = await chrome.storage.local.set(data);
  return result;
}

module.exports = {
  getChromeLocalStorage,
  setChromeLocalStorage,
};
