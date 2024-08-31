let totalSeconds;

async function getFearAndGreedIndex() {
    try {
        const response = await fetch('https://api.alternative.me/fng/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const latestData = data.data[0];

        // Initialize totalSeconds
        totalSeconds = parseInt(latestData.time_until_update, 10);

        updateCountdown();
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('time_until_update').textContent = 'Error loading data';
    }
}

function updateCountdown() {
    if (totalSeconds > 0) {
        totalSeconds--;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const timeUntilUpdate = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        document.getElementById('time_until_update').textContent = timeUntilUpdate;
    } else {
        document.getElementById('time_until_update').textContent = 'Updating...';
        getFearAndGreedIndex();
    }
}

// Call the function to fetch data after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    getFearAndGreedIndex();
    setInterval(updateCountdown, 1000);
});