function startCountdown(endTime, display) {
  function updateTimer() {
    var now = new Date().getTime();
    var distance = endTime - now;

    var hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    var seconds = Math.floor((distance % (60 * 1000)) / 1000);

    display.textContent = hours + " hours, " + minutes + " minutes, " + seconds + " seconds.";

    if (distance < 0) {
      // Reset to 24 hours
      endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // Set to 24 hours from now
      localStorage.setItem('countdownEndTime', endTime);
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

window.onload = function () {
  var endTime = localStorage.getItem('countdownEndTime');

  if (!endTime) {
    // Set countdown to 24 hours from now initially
    endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    localStorage.setItem('countdownEndTime', endTime);
  } else {
    // Convert string back to number
    endTime = parseInt(endTime, 10);
  }

  var display = document.getElementById('timer');
  startCountdown(endTime, display);
};
