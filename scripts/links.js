const baseURL = "https://github.com/Borgesfacundo/wdd230";
const linksURL = "https://borgesfacundo.github.io/wdd230/data/links.json";
const weeksList = document.querySelector("#weeks");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks);
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const list = document.createElement("li");
        list.textContent = `${week.week}: `;


        week.links.forEach((link, indice) => {
            if (indice === week.links.length - 1) {
                const a = document.createElement("a");
                a.setAttribute("href", link.url);
                a.innerHTML = `${link.title}`;
                list.appendChild(a);
                weeksList.appendChild(list); 
            } else {

            const a = document.createElement("a");
            const span = document.createElement("span");
            a.setAttribute("href", link.url);
            a.innerHTML = `${link.title}`;
            span.textContent = " | ";
            list.appendChild(a);
            list.appendChild(span);
            weeksList.appendChild(list);
        }
        });




    });
}

getLinks();