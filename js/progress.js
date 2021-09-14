// Update the daily water intake bar
let progressBarStauts = 0;
function progress(star, end) {
  if (progressBarStauts == 0) {
    progressBarStauts = 1;
    const bar = document.getElementById("myBar");
    const text = document.getElementById("label")
    const id = setInterval(frame, 100);
    function frame() {
      if (star >= end) {
        clearInterval(id);
        progressBarStauts = 0;
      } else {
        star++;
        bar.style.width = `${star}%`;
        text.innerHTML = `${star}%`;
      }
    }
  }
}