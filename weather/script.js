const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_image = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const loc_not_found = document.querySelector('.loc-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "152c0c6c6a83101b2bbd68efdb66dc38";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod === `404`){
        loc_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    loc_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_image.src = "cloud.png";
            weather_image.style.width = `60%`;
            break;
        case 'Clear':
            weather_image.src = "clear.png";
            weather_image.style.width = `60%`;
            break;
        case 'Rain':
            weather_image.src = "rain.png";
            weather_image.style.width = `60%`;
            break;
        case 'Mist':
            weather_image.src = "mist.png";
            weather_image.style.width = `60%`;
            break;
        case 'Snow':
            weather_image.src = "snow.png";
            weather_image.style.width = `60%`;
            break;
    }
    console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});