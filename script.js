const apiKey = '37b8faa78743188b6cf86db8b52c0c64'; // Replace with your OpenWeatherMap API key

document.getElementById('fetch-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

async function getWeather(location) {
    try {
        const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=37b8faa78743188b6cf86db8b52c0c64');
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('Location not found.');
        }
    } catch (error) {
        alert('Error fetching weather data.');
    }
}

function displayWeather(data) {
    document.getElementById('location-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('conditions').textContent = `Conditions: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
    document.getElementById('weather-details').classList.remove('hidden');
}
