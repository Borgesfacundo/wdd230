const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

const myBtn = document.querySelector("#darkBtn");
const main = document.querySelector("main");

myBtn.addEventListener("click", () => {
    if (myBtn.textContent.includes("🕶️")) {
        myBtn.textContent = "🔆";
        main.classList.toggle("dark");
    }
    else {
        myBtn.textContent = "🕶️";
        main.classList.toggle("dark");
    }
});

// visits count

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = "This is your first visit. 🥳 Welcome!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);