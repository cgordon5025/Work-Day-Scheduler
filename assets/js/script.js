//shows today's date
var today = moment();
$("#todayDate").text(today.format("dddd, MMMM Do YYYY"));

//shows what hour we're on  
//for reasons cannot show AM/PM look for solutions in future
var currentTime = parseInt(moment().format('H'));
console.log(currentTime)
//Lets save their input into array of objects so that we can call it using some sort of loop
var eventInput = document.getElementById("scheduleContainer").querySelectorAll("input");
var eventTime = document.getElementById("scheduleContainer").querySelectorAll("p")
function init() {
    for (var x = 0; x < eventTime.length; x++) {
        let blockTime = parseInt(eventTime[x].innerText)
        if (blockTime > 7) {
            if ((blockTime === currentTime)) {// if the times match change the class to present, so the color will be red
                eventInput[x].classList.add("present");
            } else if
                (blockTime < currentTime) {
                eventInput[x].classList.add("past");
            } else if ((blockTime > currentTime)) {
                eventInput[x].classList.add("future");
            }
        } else if (currentTime <= 12 && blockTime < 6) {
            eventInput[x].classList.add("future");
        } else if (currentTime > 12 && blockTime < 6) {//if its earlier -12 to accomodate for 24h time
            if ((blockTime + 12) === currentTime) {// if the times match change the class to present, so the color will be red
                eventInput[x].classList.add("present");
            } else if ((blockTime + 12) < currentTime) {
                eventInput[x].classList.add("past");
            } else if ((blockTime + 12) > currentTime) {
                eventInput[x].classList.add("future");
            }
        }
    }
    render()
}
//this code here will call the container of all the buttons
var saveBtnEl = $("#scheduleContainer")
//now we are looking for a single click on any button
saveBtnEl.on("click", "button", saveEvent)
//we create an empty array with the length of 9
var mySavedItems = Array(9);
function saveEvent(event) {
    event.preventDefault()
    //now we prevent default and the new variable newInput will reference the previousElementSibling of pressed button
    var newInput = event.target.previousElementSibling
    // now we want to use switch to determine what the data-num was, and log the input in the aprorpriate cell of the array
    switch (newInput.dataset.num) {
        case "1":
            mySavedItems[0] = newInput.value;
            break;
        case "2":
            mySavedItems[1] = newInput.value;
            break;
        case "3":
            mySavedItems[2] = newInput.value;
            break;
        case "4":
            mySavedItems[3] = newInput.value;
            break;
        case "5":
            mySavedItems[4] = newInput.value;
            break;
        case "6":
            mySavedItems[5] = newInput.value;
            break;
        case "7":
            mySavedItems[6] = newInput.value;
            break;
        case "8":
            mySavedItems[7] = newInput.value;
            break;
        case "9":
            mySavedItems[8] = newInput.value;
            break;
    }
    //now we want to save it in our local storage
    localStorage.setItem("savedEvents", JSON.stringify(mySavedItems));
    //and render it 
    render();
}
//this will call all of our time blocks
allInput = $(".time-block")
function render() {
    //lets get our items from the local storage
    savedEvents = JSON.parse(localStorage.getItem("savedEvents"))
    //for the length of the buttons (all buttons) we will loop here
    for (a = 0; a < allInput.length; a++) {
        //if the cell is null let's make it blank
        if (savedEvents[a] === null) {
            savedEvents[a] = ' '
        }
        //and lets put those values in the input boxes
        allInput[a].value = savedEvents[a]
    }
}
//display everything by calling the init 
init()