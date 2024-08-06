async function getFearAndGreedIndex() {
  try {
      const response = await fetch('https://api.alternative.me/fng/');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const latestData = data.data[0];

      // Convert time_until_update from seconds to hh:mm:ss format
      const totalSeconds = parseInt(latestData.time_until_update, 10);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      const timeUntilUpdate = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

      // Update the DOM
      document.getElementById('time_until_update').textContent = timeUntilUpdate;
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('time_until_update').textContent = 'Error loading data';
}
}

// Call the function to fetch data after DOM is fully loaded
document.addEventListener('DOMContentLoaded', getFearAndGreedIndex);