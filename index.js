let timerInterval;

function startTimer() {
  clearInterval(timerInterval); // Reset if clicked again

  const minutes = parseInt(document.getElementById('minutesInput').value);
  let timeInSeconds = minutes * 60;

  function updateTimerDisplay() {
    const min = Math.floor(timeInSeconds / 60);
    const sec = timeInSeconds % 60;
    document.getElementById('timer').textContent =
      `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeInSeconds--;
    updateTimerDisplay();

    if (timeInSeconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = "Time's up!";
      alert("⏰ Timer Finished!");
    }
  }, 1000);
}
