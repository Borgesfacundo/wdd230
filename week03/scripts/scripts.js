// Adding last modification date
lastModif = document.lastModified;
const lastModElement = document.querySelector("#lastModified");
const text = `Last modified: ${lastModif}`;

lastModElement.textContent += text;