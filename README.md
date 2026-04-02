# Week 12: User Directory & Weather Dashboard

## Author
- **Name:** Faith Mshiki 
- **GitHub:** [@Mshi-dev15](https://github.com/Mshi-dev15)
- **Date:** march 30,2026

## Project Description
This project consists of two main web applications: a **User Directory** and a **Weather Dashboard**.  
- The **User Directory** fetches data from an API, allowing users to search, sort, and filter a list of users by name, email, or city.  
- The **Weather Dashboard** fetches current weather and forecast data for any city using the OpenWeatherMap API, displays weather details, and saves recent searches for quick access.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Local Storage
- OpenWeatherMap API
- JSONPlaceholder API

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

## How to Run
1. Clone this repository  
2. Open the relevant HTML file (`user-directory.html` or `weather-dashboard.html`) in your browser  

OR  

Run a local server (e.g., Live Server in VSCode) to avoid CORS issues for API fetches.

## Lessons Learned
- How to use the Fetch API to consume public APIs.  
- Manipulating the DOM dynamically using JavaScript.  
- Handling asynchronous operations with async/await.  
- Using Local Storage to save user data persistently.  
- Combining search, sort, and filter functionality for dynamic data.

## Challenges Faced
- The Weather Dashboard initially displayed the "Loading…" text indefinitely due to missing `.hidden` CSS and JS scoping issues.  
- Ensuring both search and filters worked together in the User Directory required careful logic ordering.  
- Debugging async API fetch calls and handling errors gracefully for invalid inputs.

## Screenshots (optional)
![User Directory Screenshot]()  
![Weather Dashboard Screenshot]

## Live Demo (if deployed)
[View Live Demo]