//Weather API
const myTemp = document.querySelector("#weather-temp");
const icon = document.querySelector("#weather-icon");
const desc = document.querySelector("#desc");
const myTown = document.querySelector("#town");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-35.44&lon=-60.88&unit=imperial&appid=1d0a88fadb39aa4f559de6c33be07156";


async function apiFetch() {
    try {
            const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Display results

function displayResults(data) {
    myTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", data.weather[0].description);
    desc.innerHTML = data.weather[0].description;
    myTown.innerHTML = data.name;


}


apiFetch();