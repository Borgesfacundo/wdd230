const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

//Local Storage: Num of Visits
const visits = document.querySelector(".visits");
//Miliseconds to make a day
const msToDays = 84600000;

// today's date
const lastVisit = Date.now();

let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastUserVisit = Number(window.localStorage.getItem("lastVisit-ls"));

let daysPassedSinceLastVisit = Math.round((lastVisit - lastUserVisit) / msToDays);



if (numVisits == 0) {
    visits.textContent = "Welcome! Let us know if you have any questions.";
}
if (numVisits !== 0 && (lastVisit - lastUserVisit) < msToDays) {
    visits.textContent = "Back so soon! Awesome!";
}
if (numVisits !== 0 && (lastVisit - lastUserVisit) > msToDays) {
    if (daysPassedSinceLastVisit = 1) {
        visits.textContent = `You last visited ${daysPassedSinceLastVisit} day ago`;
    } else {
        visits.textContent = `You last visited ${daysPassedSinceLastVisit} days ago`;
    }
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisit-ls", lastVisit);

