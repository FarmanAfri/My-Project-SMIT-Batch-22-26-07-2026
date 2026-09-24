let hrs = document.getElementById("hrs");
let mints = document.getElementById("mints");
let second = document.getElementById("second");
let pm_Am = document.getElementById("pm_Am");
let getDayS = document.getElementById("days");
let dayElements = document.querySelectorAll("#sun, #mon, #tue, #wed, #thu, #fri, #sat");



let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let today = new Date().getDay();



dayElements[today].style.color = "blue";


 setInterval(function () {

    let now = new Date();

    let hours = now.getHours();

    if (hours >= 12) {
        pm_Am.innerText = "PM";
    } else {
        pm_Am.innerText = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    hrs.innerText = hours;
    mints.innerText = now.getMinutes();
    second.innerText = now.getSeconds();

}, 1000);