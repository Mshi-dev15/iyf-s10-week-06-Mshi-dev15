# Week 12: User Directory & Weather Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

## Author
- **Name:** Faith Mshiki 
- **GitHub:** [@Mshi-dev15](https://github.com/Mshi-dev15)
- **Date:** March 30,2026

---

## Project Description
This project consists of two main web applications: a **User Directory** and a **Weather Dashboard**.  
- The **User Directory** fetches data from an API, allowing users to search, sort, and filter a list of users by name, email, or city.  
- The **Weather Dashboard** fetches current weather and forecast data for any city using the OpenWeatherMap API, displays weather details, and saves recent searches for quick access.

---

## 🌐 Live Demos

[![Weather Dashboard](https://img.shields.io/badge/⛅%20Weather%20Dashboard-274D6A?style=for-the-badge&logoColor=white)](https://mshi-dev15.github.io/iyf-s10-week-06-Mshi-dev15/)
<br><br>
[![Display API Data](https://img.shields.io/badge/👥%20Display%20API%20Data-1572B6?style=for-the-badge&logoColor=white)](https://Mshi-dev15.github.io/iyf-s10-week-06-Mshi-dev15/Lesson-12-Exercises/Display-API-Data.html)
<br><br>
[![Post Request](https://img.shields.io/badge/📤%20Post%20Request-E34F26?style=for-the-badge&logoColor=white)](https://Mshi-dev15.github.io/iyf-s10-week-06-Mshi-dev15/Lesson-12-Exercises/Post-Request.html)
<br><br>
[![Search & Filter](https://img.shields.io/badge/🔍%20Search%20%26%20Filter-4CAF50?style=for-the-badge&logoColor=white)](https://Mshi-dev15.github.io/iyf-s10-week-06-Mshi-dev15/Lesson-12-Exercises/Search-Filter.html)


---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Local Storage
- OpenWeatherMap API
- JSONPlaceholder API

---

## Features
- **User Directory**
  - Search users by name or email
  - Sort users alphabetically
  - Filter users by city
- **Weather Dashboard**
  - Fetch and display current weather
  - Fetch and display 5-day forecast at noon
  - Save and display recent city searches
  - Error handling for invalid city inputs
  - Loading state during API requests

---

## How to Run
1. Clone this repository  
2. Open the relevant HTML file (`user-directory.html` or `weather-dashboard.html`) in your browser  

OR  

Run a local server (e.g., Live Server in VSCode) to avoid CORS issues for API fetches.

---

## Lessons Learned
- How to use the Fetch API to consume public APIs.  
- Manipulating the DOM dynamically using JavaScript.  
- Handling asynchronous operations with async/await.  
- Using Local Storage to save user data persistently.  
- Combining search, sort, and filter functionality for dynamic data.

---

## Challenges Faced
- The Weather Dashboard initially displayed the "Loading…" text indefinitely due to missing `.hidden` CSS and JS scoping issues.  
- Ensuring both search and filters worked together in the User Directory required careful logic ordering.  
- Debugging async API fetch calls and handling errors gracefully for invalid inputs.

---

## Screenshots 
### 📤 Post Request
![post Request Screenshot](https://raw.githubusercontent.com/Mshi-dev15/iyf-s10-week-06-Mshi-dev15/main/images/Screenshot_4-4-2026_15130_127.0.0.1(1).jpeg)

### ⛅ Weather Dashboard
![Weather Dashboard Screenshot](https://raw.githubusercontent.com/Mshi-dev15/iyf-s10-week-06-Mshi-dev15/main/images/Screenshot_4-4-2026_145924_127.0.0.1(1).jpeg)

