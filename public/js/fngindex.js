function startCountdown(endTime, display) {
  function updateTimer() {
    var now = new Date().getTime();
    var distance = endTime - now;

    var hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((distance % (60 * 1000)) / 1000);

    display.textContent = hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";

    if (distance < 0) {
      endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Reset to 24 hours
      localStorage.setItem('countdownEndTime', endTime);
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

window.onload = function () {
  var endTime = localStorage.getItem('countdownEndTime');

  if (!endTime) {
    endTime = new Date().getTime() + 11 * 60 * 60 * 1000 + 39 * 60 * 1000;
    localStorage.setItem('countdownEndTime', endTime);
  }

  var display = document.getElementById('timer');
  startCountdown(endTime, display);
};