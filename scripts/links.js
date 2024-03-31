const baseURL = "https://github.com/Borgesfacundo/wdd230";
const linksURL = "https://github.com/Borgesfacundo/wdd230/data/links.json";
const weeksList = document.querySelector("#weeks");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const list = document.createElement("li");
        const a = document.createElement("a");
        const link = week.weeks.links[weeks].url;


        
        list.textContent = week.weeks.week;
        a.setAttribute("href", link);
        a.innerHTML = week.weeks.links[weeks].title;

        list.appendChild(a);
    });

}

getLinks();