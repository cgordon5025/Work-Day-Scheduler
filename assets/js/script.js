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
//lets call the save buttons
var saveBtn1 = document.getElementById("save1");
var saveBtn2 = document.getElementById("save2");
var saveBtn3 = document.getElementById("save3");
var saveBtn4 = document.getElementById("save4");
var saveBtn5 = document.getElementById("save5");
var saveBtn9 = document.getElementById("save9");
var saveBtn10 = document.getElementById("save10");
var saveBtn11 = document.getElementById("save11");
var saveBtn12 = document.getElementById("save12");
//lets also get the inputs
var inputEl1 = document.getElementById("1pmEvent");
var inputEl2 = document.getElementById("2pmEvent");
var inputEl3 = document.getElementById("3pmEvent");
var inputEl4 = document.getElementById("4pmEvent");
var inputEl5 = document.getElementById("5pmEvent");
var inputEl9 = document.getElementById("9amEvent");
var inputEl10 = document.getElementById("10amEvent");
var inputEl11 = document.getElementById("11amEvent");
var inputEl12 = document.getElementById("12pmEvent");

//Lets also set up some variables
var currentItem1;
var savedEvent1;
var currentItem2;
var savedEvent2;
var currentItem3;
var savedEvent3;
var currentItem4;
var savedEvent4;
var currentItem5;
var savedEvent5;
var currentItem9;
var savedEvent9;
var currentItem10;
var savedEvent10;
var currentItem11;
var savedEvent11;
var currentItem12;
var savedEvent12;
//lets set the event listeners 
// saveBtn1.addEventListener("click", SaveEvent1);
// saveBtn2.addEventListener("click", SaveEvent2);
// saveBtn3.addEventListener("click", SaveEvent3);
// saveBtn4.addEventListener("click", SaveEvent4);
// saveBtn5.addEventListener("click", SaveEvent5);
// saveBtn9.addEventListener("click", SaveEvent9);
// saveBtn10.addEventListener("click", SaveEvent10);
// saveBtn11.addEventListener("click", SaveEvent11);
// saveBtn12.addEventListener("click", SaveEvent12);

// function SaveEvent1(event) {
//     event.preventDefault();
//     currentItem1 = inputEl1.value;
//     console.log(currentItem1);
//     localStorage.setItem("myEvent1", JSON.stringify(currentItem1));
//     renderEvent();
// }
// function SaveEvent2(event) {
//     event.preventDefault();
//     currentItem2 = inputEl2.value;
//     console.log(currentItem2);
//     localStorage.setItem("myEvent2", JSON.stringify(currentItem2));
//     renderEvent();
// }
// function SaveEvent3(event) {
//     event.preventDefault();
//     currentItem3 = inputEl3.value;
//     console.log(currentItem3);
//     localStorage.setItem("myEvent3", JSON.stringify(currentItem3));
//     renderEvent();
// }
// function SaveEvent4(event) {
//     event.preventDefault();
//     currentItem4 = inputEl4.value;
//     console.log(currentItem4);
//     localStorage.setItem("myEvent4", JSON.stringify(currentItem4));
//     renderEvent();
// }
// function SaveEvent5(event) {
//     event.preventDefault();
//     currentItem5 = inputEl5.value;
//     console.log(currentItem5);
//     localStorage.setItem("myEvent5", JSON.stringify(currentItem5));
//     renderEvent();
// }
// function SaveEvent9(event) {
//     event.preventDefault();
//     currentItem9 = inputEl9.value;
//     console.log(currentItem9);
//     localStorage.setItem("myEvent9", JSON.stringify(currentItem9));
//     renderEvent();
// }
// function SaveEvent10(event) {
//     event.preventDefault();
//     currentItem10 = inputEl10.value;
//     console.log(currentItem10);
//     localStorage.setItem("myEvent10", JSON.stringify(currentItem10));
//     renderEvent();
// }
// function SaveEvent11(event) {
//     event.preventDefault();
//     currentItem11 = inputEl11.value;
//     console.log(currentItem11);
//     localStorage.setItem("myEvent11", JSON.stringify(currentItem11));
//     renderEvent();
// }
// function SaveEvent12(event) {
//     event.preventDefault();
//     currentItem12 = inputEl12.value;
//     console.log(currentItem12);
//     localStorage.setItem("myEvent12", JSON.stringify(currentItem12));
//     renderEvent();
// }

// //lets render the events
// function renderEvent() {
//     if (!localStorage.getItem("myEvent1")) {
//         savedEvent1 = '';
//     } else { savedEvent1 = JSON.parse(localStorage.getItem("myEvent1")) }
//     inputEl1.value = savedEvent1;
//     if (!localStorage.getItem("myEvent2")) {
//         savedEvent2 = '';
//     } else { savedEvent2 = JSON.parse(localStorage.getItem("myEvent2")) }
//     inputEl2.value = savedEvent2;
//     if (!localStorage.getItem("myEvent3")) {
//         savedEvent3 = '';
//     } else { savedEvent3 = JSON.parse(localStorage.getItem("myEvent3")) }
//     inputEl3.value = savedEvent3;
//     if (!localStorage.getItem("myEvent4")) {
//         savedEvent4 = '';
//     } else { savedEvent4 = JSON.parse(localStorage.getItem("myEvent4")) }
//     inputEl4.value = savedEvent4;
//     if (!localStorage.getItem("myEvent5")) {
//         savedEvent5 = '';
//     } else { savedEvent5 = JSON.parse(localStorage.getItem("myEvent5")) }
//     inputEl5.value = savedEvent5;
//     if (!localStorage.getItem("myEvent9")) {
//         savedEvent9 = '';
//     } else { savedEvent9 = JSON.parse(localStorage.getItem("myEvent9")) }
//     inputEl9.value = savedEvent9;
//     if (!localStorage.getItem("myEvent10")) {
//         savedEvent10 = '';
//     } else { savedEvent10 = JSON.parse(localStorage.getItem("myEvent10")) }
//     inputEl10.value = savedEvent10;
//     if (!localStorage.getItem("myEvent11")) {
//         savedEvent11 = '';
//     } else { savedEvent11 = JSON.parse(localStorage.getItem("myEvent11")) }
//     inputEl11.value = savedEvent11;
//     if (!localStorage.getItem("myEvent12")) {
//         savedEvent12 = '';
//     } else { savedEvent12 = JSON.parse(localStorage.getItem("myEvent12")) }
//     inputEl12.value = savedEvent12;
// }
// //we want this to show at all times
// renderEvent()

//I want to be able to save each item and put it in the respective space,way to do it without making code explode?
//code for playing later
var saveBtnEl = $("#scheduleContainer")
saveBtnEl.on("click", "button", saveEvent)
console.log(saveBtnEl.on("click", "saveBtn", saveEvent))
function test() {
    console.log("you clicked me")
}
var mySavedItems = Array(9);
console.log(mySavedItems)
// saveBtnEl.addEventListener("click", saveEvent)
function saveEvent(event) {
    event.preventDefault()
    var newInput = event.target.previousElementSibling
    console.log(newInput.value)
    console.log(typeof newInput.dataset.num)
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
    localStorage.setItem("savedEvents", JSON.stringify(mySavedItems));
    render();
}
allInput = $(".time-block")
function render() {
    savedEvents = JSON.parse(localStorage.getItem("savedEvents"))
    for (a = 0; a < allInput.length; a++) {
        if (savedEvents[a] === null) {
            savedEvents[a] = ' '
        }
        console.log(savedEvents)
        allInput[a].value = savedEvents[a]
    }
}