const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});


document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth'
    })

    calendar.render()
})
