//shows today's date
var today = moment();
$("#todayDate").text(today.format("dddd, MMMM do YYYY"));

//shows what hour we're on  
var currentTime = parseInt(moment().format('HH A'));
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
//
var eventTime = document.getElementById("scheduleContainer").querySelectorAll("p")

//this is how I call it down
// console.log(eventTime[0].innerText)
var totalTimeBlocks = document.getElementById("scheduleContainer").querySelectorAll("section")
console.log(totalTimeBlocks)
console.log(eventTime)
console.log(eventTime[0].innerText)
var time;
time = parseInt(eventTime[0].innerText)
//for loop to go through and make changes to the classes
// var blockTime;
// for (var i = 0; i < totalTimeBlocks.length; i++) {
for (var x = 0; x < eventTime.length; x++) {
    let blockTime = (eventTime[x].innerText)
    console.log(blockTime)
    console.log(blockTime === currentTime)
    if (blockTime === currentTime) {// if the times match change the class to present, so the color will be red
        eventInput.className += "present"
    }
}
// }
//because my current time is military I want to ensure that the AMS will be accepted

//to do so, if a event is 9, and time is 1 you can do if event<time&&event>time-6