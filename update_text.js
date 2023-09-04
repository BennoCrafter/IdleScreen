document.addEventListener("DOMContentLoaded", function () {
    // This code will run after the DOM has fully loaded

    function updateText() {
        // Get references to the HTML elements by their IDs
        const weatherElement = document.getElementById("weather");
        const timeElement = document.getElementById("current-time");
        // Check if the elements exist

        const newTimeData = getCurrentTime();

        weatherElement.innerText = "Weather: " + "coming soon";
        timeElement.innerText = "Current Time: " + newTimeData;
    }

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");

        // Format the time in German time format (24-hour) with seconds
        const timeString = `${hours}:${minutes}:${seconds}`;

        return timeString;
    }

    // Weather (in the same file so Flask server not required, but you can see it also in get_weather.js)
    updateText()
    setInterval(updateText, 1000);

});
