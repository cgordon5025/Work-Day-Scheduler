var today = moment();
$("#todayDate").text(today.format("dddd, MMMM do YYYY"));

var currentTime = parseInt(moment().format('H'));

var saveBtn = document.getElementById("save9")

var saveArray = []
var currentItem;
var inputEL = document.getElementById("9amEvent")
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

//This will change color based upon what time the event is supposed to occur and the current time
Array.from(rows).forEach(row => {
    let eventIdString = row.id
    eventHour;
    if (eventIdString) {
        eventHour = parseInt(eventIdString)
    };
    if (eventHour) {
        if (currentTime === eventHour) {
            timeBlocks.css({ 'background-color': '#ff6961', 'color': 'white' });
        } else if ((currentTime < eventHour) && (currentTime > eventHour - 6)) {
            timeBlocks.css({ 'background-color': '#77dd77', 'color': 'white' });
        } else if ((currentTime > eventHour) && (currentTime < eventHour + 6)) {
            timeBlocks.css({ 'background-color': '#d3d3d3', 'color': 'white' })
        } else {
            timeBlocks.css({ 'background-color': 'white' })
        }
    }
})

