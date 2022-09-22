//shows today's date
var today = moment();
$("#todayDate").text(today.format("dddd, MMMM Do YYYY"));

//shows what hour we're on  
//for reasons cannot show AM/PM look for solutions in future
var currentTime = parseInt(moment().format('HH'));
console.log(currentTime)

//lets call the save buttons
var saveBtn = document.getElementById("save9")

var saveArray = []
var currentItem;
var inputEL = document.getElementById("9amEvent")
var inputEL
saveBtn.addEventListener("click", SaveEvent)

var timeBlocks = document.querySelectorAll("input")

function SaveEvent(event) {
    event.preventDefault()
    currentItem = inputEL.value;
    localStorage.setItem("myEvent", JSON.stringify(currentItem))
    renderEvent()
}

function renderEvent() {
    savedEvent = JSON.parse(localStorage.getItem("myEvent"))
    inputEL.textContent = savedEvent
}
//we want this to show at all times
renderEvent()
//I want to be able to save each item and put it in the respective space,way to do it without making code explode?

//Lets save their input into array of objects so that we can call it using some sort of loop
var eventInput = document.getElementById("scheduleContainer").querySelectorAll("input");
console.log(eventInput)
var eventTime = document.getElementById("scheduleContainer").querySelectorAll("p")
eventInput[1].classList.add("test")
//this is how I call it down
// console.log(eventTime[0].innerText)
var totalTimeBlocks = document.getElementById("scheduleContainer").querySelectorAll("section")

var test = document.getElementById("scheduleContainer")
console.log("this is a" + typeof test)
console.log("testing" + test)
var testing = document.getElementById("scheduleContainer")
testing.classList.add("testing")
console.log(testing)

for (var x = 0; x < eventTime.length; x++) {
    let blockTime = parseInt(eventTime[x].innerText)
    if (blockTime === currentTime) {// if the times match change the class to present, so the color will be red
        eventInput[x].classList.add("present");
    } else if ((blockTime < currentTime) && (blockTime > currentTime - 12)) { //if its earlier -12 to accomodate for 24h time
        eventInput[x].classList.add("past");
    } else if ((blockTime > currentTime) && (blockTime < currentTime - 12)) {
        eventInput[x].classList.add("future");
    }
}