const API_KEY ="976beceec2c142e3158acb347a8f47fe";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL ="https://api.openweathermap.org/data/2.5/forecast";


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
        hideError();
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
    loadHistory();
    

    
} catch(error){
    showError(error.message);
}finally{
    hideloading();
}
}
async function  getForecast(city) {
    //const url= `${FORECAST_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const url= `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch forecast");
        }
        const data = await response.json(); 
        displayForecast(data);
    }catch(error){
        console.error(error);
    }
    
}
function displayWeather(data){
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;

    feelslike.textContent = `feels like: ${Math.round(data.main.feels_like)}°C`
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${data.wind.speed} m/s`;
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
   

    weatherDisplay.classList.remove("hidden");
}
function displayForecast(forecast){
    const container = document.getElementById("forecast");
    container.innerHTML="";
    const dailyData = forecast.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );
    dailyData.forEach(day =>{
        const div = document.createElement("div");
        div.innerHTML =`
        <p><strong>${new Date(day.dt_txt).toDateString()}</strong></p>
        <p>temp: ${Math.round(day.main.temp)}°C</p>
        <p>${day.weather[0].description}</p>
        <hr>
        `;
        container.appendChild(div);
    })
}


function showloading(){
    loading.classList.remove("hidden");
    //atherDisplay.classList.add("hidden");
}
function hideloading(){
    loading.classList.add("hidden")
}
function showError(message){
    error.textContent = message;
    error.classList.remove("hidden");
}
function hideError(){
    error.classList.add("hidden");
}
function saveToHistory(city){
    // save to local
    let history = JSON.parse(localStorage.getItem("history")) || [];

   

    history = history.filter(c => c !== city);
    history.unshift(city);
    if(history.length >5){
        history.pop();
    }
         localStorage.setItem("history", JSON.stringify(history));
}


function loadHistory(){
    //load from localstorage
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const container = document.getElementById("search-history");
    container.innerHTML="";
    history.forEach(city =>{
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent= city;
        btn.addEventListener("click", ()=>{
            getWeather(city);
            getForecast(city);
        });
        li.appendChild(btn);
        container.appendChild(li)
    });

}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city = cityInput.value.trim();
    if(city){
        getWeather(city);
        getForecast(city)
    }
});
//ndow.addEventListener("load", ()=>{
    //adHistory();
    //nst history = JSON.parse(localStorage.getItem("history")) ||[];
    //(history.length > 0){
      //const lastCity = history[0];
      //getWeather(history[0]);
   //etForecast(history[0]);
   //
//;
window.addEventListener("load", async () => {
    loadHistory();

    const history = JSON.parse(localStorage.getItem("history")) || [];
    if (history.length > 0) {
        const lastCity = history[0];
        cityInput.value = lastCity; // keep the input filled

        try {
            await getWeather(lastCity);   // wait for weather
            await getForecast(lastCity);  // then wait for forecast
        } catch (err) {
            console.error(err);
        }
    }
});