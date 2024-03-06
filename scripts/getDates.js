const currentDate = new Date();

const currentYear = currentDate.getFullYear();

year = document.querySelector(".year");

year.innerHTML = currentYear;

// Adding last modification date
lastModif = document.lastModified;
const lastModElement = document.querySelector("#lastModified");
const text = `Last modified: ${lastModif}`;

lastModElement.textContent += text;