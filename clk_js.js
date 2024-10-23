// script.js
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Get current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the clock display
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock when the page loads
updateClock();
