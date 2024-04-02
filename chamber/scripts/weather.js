//Weather Third Party API

const myTemp = document.querySelector("#weather-temp");
const icon = document.querySelector("#weather-icon");
const desc = document.querySelector("#desc");
const town = document.querySelector("#town");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-35.44&lon=-60.88&units=imperial&appid=1d0a88fadb39aa4f559de6c33be07156";


async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//display Weather
function displayWeather(data) {
    myTemp.innerHTML = `<b>Today</b>: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    desc.innerHTML = data.weather[0].description;
    town.innerHTML = data.name;
}

weatherFetch();

//3 days forecast weather
const container = document.querySelector(".forecast-weather");
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=-35.44&lon=-60.88&units=imperial&&appid=1d0a88fadb39aa4f559de6c33be07156";

async function forecastfetch() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

forecastfetch();

function displayForecast(data) {
    // Filter out the forecast data for the next 3 days
    const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    console.log(forecastData);

    forecastData.forEach((day) => {
        //create variables
        const tempAndDesc = document.createElement("p");
        const dateString = day.dt_txt;

        const date  = dateString.split(" ");

        
    
        tempAndDesc.innerHTML = `<b>${date}</b>: ${day.main.temp}&deg;F - ${day.weather[0].description}`;

        container.appendChild(tempAndDesc);
    });

}