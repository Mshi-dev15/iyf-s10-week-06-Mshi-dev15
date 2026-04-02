const API_KEY ="976beceec2c142e3158acb347a8f47fe";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");


const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelslike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind= document.getElementById("wind");
const pressure = document.getElementById("pressure");

async function getWeather(city){
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        showloading();
        hideloading();
        const response = await fetch(url);
        if(!response.ok){
            if(response.status ===404){
            throw new Error ("city not found");
        }
        throw new Error("Failed to fetch weather data");

    }

    const data = await response.json();
    displayWeather(data);
    saveToHistory(city);

    
} catch(error){
    showError(error.message);
}finally{
    hideloading();
}
}
function displayWeather(data){
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;

    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${data.wind.speed} m/s`;
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}
function showloading(){
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}
function hideloading(){
    loading.classList.add("hidden")
}
function showError(message){
    error.textContent = message;
    error.classList.remove("hidden");
}
function saveToHistory(city){
    // save to local
    let history = JSON.parse(localStorage.getItem("history")) || [];

    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem("history", JSON.stringify(history));
    }

}
function loadHistory(){
    //load from localstorage
    const history = JSON.parse(localStorage.getItem("history")) || [];

    history.forEach(city => {
        console.log("Previous search:", city);
    });
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city = cityInput.value.trim();
    if(city){
        getWeather(city);
    }
});