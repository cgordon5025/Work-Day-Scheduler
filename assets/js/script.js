var today = moment();
$("#todayDate").text(today.format("dddd, MMMM do YYYY"))


var saveBtn = document.getElementById("save9")

var saveArray = []
var currentItem;
var inputEL = document.getElementById("9amEvent")
saveBtn.addEventListener("click", SaveEvent)



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
//I want to be able to save each item and put it in the respective space,way to do it without making code explode?
