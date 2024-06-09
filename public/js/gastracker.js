const apiUrl =
  "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT";

const timerDisplay = document.getElementById("timer");

function resetTimer() {
  let seconds = 10;

  updateTimerDisplay(seconds);

  const countdown = setInterval(() => {
    seconds--;

    updateTimerDisplay(seconds);

    if (seconds === 0) {
      clearInterval(countdown);

      resetTimerAndFetchData();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const display = `${minutes < 10 ? "0" : ""}${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  timerDisplay.textContent = `Next Update in : ${display}`;
}

async function fetchDataAndUpdateHTML() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const data = await response.json();

    const { SafeGasPrice, ProposeGasPrice, FastGasPrice } = data.result;

    document.getElementById(
      "safeGasPrice"
    ).innerText = `Gwei : ${SafeGasPrice}`;
    document.getElementById(
      "proposeGasPrice"
    ).innerText = `Gwei : ${ProposeGasPrice}`;
    document.getElementById(
      "fastGasPrice"
    ).innerText = `Gwei : ${FastGasPrice}`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function resetTimerAndFetchData() {
  resetTimer();

  fetchDataAndUpdateHTML();
}

resetTimerAndFetchData();
