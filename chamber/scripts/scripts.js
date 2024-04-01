const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

// Timestamp
function setCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toISOString();
    document.getElementById("timestamp").value = dateTimeString;
}

// Get the element with ID "timestamp"
var timestampElement = document.getElementById("timestamp");

// Call function when page is loaded
if (timestampElement !== null) {
    setCurrentDateTime();
} else {
    console.log("no Timestamp element");
}
