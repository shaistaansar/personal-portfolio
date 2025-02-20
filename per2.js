//per 2
function animatePercentage(targetPercentage, duration) {
    let start = 0;
    const element = document.getElementById("a2");
    const increment = targetPercentage / (duration / 50); // Increment every 50 ms

    const interval = setInterval(function() {
        start += increment;
        if (start >= targetPercentage) {
            start = targetPercentage;
            clearInterval(interval);
        }
        element.textContent = Math.floor(start) + '%'; // Update the counter text
    }, 50); // Adjust the timing as needed (50ms interval here)
}

// Start the animation with target percentage 75% and duration of 3000ms (3 seconds)
animatePercentage(70, 3000);