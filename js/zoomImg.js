module.exports = (() => {
  const img = document.getElementById('img');
  let i = 100;
  setInterval(() => {
    if (parseFloat(img.style.width) > 1300 || parseFloat(img.style.height) > 1300) i *= -1;
    if (parseFloat(img.style.width) < 100 || parseFloat(img.style.height) < 100) i *= -1;
    img.style.width = `${`${parseFloat(img.style.width) + (i)}`.toString()}px`;
    img.style.height = `${`${parseFloat(img.style.height) + (i)}`.toString()}px`;
  }, 100);
});
