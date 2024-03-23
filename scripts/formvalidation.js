//form page

const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const fb = document.querySelector("#feedback");

pwd2.addEventListener("focusout", controlar);

function controlar() {
    // console.log("inside the function");
    if (pwd1.value !== pwd2.value) {
        //console.log("values do not match")
        pwd1.value = ""
        pwd2.value = ""
        pwd1.focus()
        fb.textContent = "Password do not match. Try again"
    } else {
        // console.log("values match!")
        fb.textContent = ""
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}