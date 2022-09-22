//shows today's date
var today = moment();
$("#todayDate").text(today.format("dddd, MMMM Do YYYY"));

//shows what hour we're on  
//for reasons cannot show AM/PM look for solutions in future
var currentTime = (moment().format('hA'));
console.log(currentTime)

//Lets save their input into array of objects so that we can call it using some sort of loop
var eventInput = document.getElementById("scheduleContainer").querySelectorAll("input");
var saveBtn = document.querySelectorAll("button")
var eventTime = document.getElementById("scheduleContainer").querySelectorAll("p")
//this is how I call it down
// console.log(eventTime[0].innerText)
var totalTimeBlocks = document.getElementById("scheduleContainer").querySelectorAll("section")

for (var x = 0; x < eventTime.length; x++) {
    let blockTime = (eventTime[x].innerText)
    console.log(blockTime)
    console.log(blockTime === currentTime)
    console.log(blockTime < currentTime)
    if (blockTime === currentTime) {// if the times match change the class to present, so the color will be red
        eventInput[x].classList.add("present");
    } else if (blockTime < currentTime) { //if its earlier -12 to accomodate for 24h time
        eventInput[x].classList.add("past");
    } else if (blockTime > currentTime) {
        eventInput[x].classList.add("future");
    }
}
//lets call the save buttons
var saveBtn9 = document.getElementById("save9")


var currentItem9;
var savedEvent9
var inputEL9 = document.getElementById("9amEvent")
saveBtn9.addEventListener("click", SaveEvent9)
inputEL9.textContent = savedEvent9
var timeBlocks = document.querySelectorAll("input")

function SaveEvent9(event) {
    event.preventDefault()
    currentItem9 = inputEL9.value;
    console.log(currentItem9)
    localStorage.setItem("myEvent9", JSON.stringify(currentItem9))
    renderEvent()
}


console.log(savedEvent9)
function renderEvent() {
    savedEvent9 = JSON.parse(localStorage.getItem("myEvent"))
    inputEL9.value = savedEvent9
}

//we want this to show at all times
renderEvent()
//I want to be able to save each item and put it in the respective space,way to do it without making code explode?