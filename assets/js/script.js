//shows today's date
var today = moment();
$("#todayDate").text(today.format("dddd, MMMM Do YYYY"));

//shows what hour we're on  
//for reasons cannot show AM/PM look for solutions in future
var currentTime = (moment().format('hA'));
console.log(currentTime)

//Lets save their input into array of objects so that we can call it using some sort of loop
var eventInput = document.getElementById("scheduleContainer").querySelectorAll("input");
var eventTime = document.getElementById("scheduleContainer").querySelectorAll("p")
//this is how I call it down
// console.log(eventTime[0].innerText)

for (var x = 0; x < eventTime.length; x++) {
    let blockTime = (eventTime[x].innerText)
    console.log(blockTime)
    console.log(blockTime === currentTime)
    console.log(blockTime < currentTime - 12)
    console.log(blockTime > (currentTime - 12))
    if (blockTime === currentTime) {// if the times match change the class to present, so the color will be red
        eventInput[x].classList.add("present");
    } else if (blockTime < currentTime) { //if its earlier -12 to accomodate for 24h time
        eventInput[x].classList.add("past");
    } else if (blockTime > currentTime) {
        eventInput[x].classList.add("future");
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
saveBtn1.addEventListener("click", SaveEvent1);
saveBtn2.addEventListener("click", SaveEvent2);
saveBtn3.addEventListener("click", SaveEvent3);
saveBtn4.addEventListener("click", SaveEvent4);
saveBtn5.addEventListener("click", SaveEvent5);
saveBtn9.addEventListener("click", SaveEvent9);
saveBtn10.addEventListener("click", SaveEvent10);
saveBtn11.addEventListener("click", SaveEvent11);
saveBtn12.addEventListener("click", SaveEvent12);

function SaveEvent1(event) {
    event.preventDefault();
    currentItem1 = inputEl1.value;
    console.log(currentItem1);
    localStorage.setItem("myEvent1", JSON.stringify(currentItem1));
    renderEvent1();
}
function SaveEvent2(event) {
    event.preventDefault();
    currentItem2 = inputEl2.value;
    console.log(currentItem2);
    localStorage.setItem("myEvent2", JSON.stringify(currentItem2));
    renderEvent2();
}
function SaveEvent3(event) {
    event.preventDefault();
    currentItem3 = inputEl3.value;
    console.log(currentItem3);
    localStorage.setItem("myEvent3", JSON.stringify(currentItem3));
    renderEvent3();
}
function SaveEvent4(event) {
    event.preventDefault();
    currentItem4 = inputEl4.value;
    console.log(currentItem4);
    localStorage.setItem("myEvent4", JSON.stringify(currentItem4));
    renderEvent4();
}
function SaveEvent5(event) {
    event.preventDefault();
    currentItem5 = inputEl5.value;
    console.log(currentItem5);
    localStorage.setItem("myEvent5", JSON.stringify(currentItem5));
    renderEvent5();
}
function SaveEvent9(event) {
    event.preventDefault();
    currentItem9 = inputEl9.value;
    console.log(currentItem9);
    localStorage.setItem("myEvent9", JSON.stringify(currentItem9));
    renderEvent9();
}
function SaveEvent10(event) {
    event.preventDefault();
    currentItem10 = inputEl10.value;
    console.log(currentItem10);
    localStorage.setItem("myEvent10", JSON.stringify(currentItem10));
    renderEvent10();
}
function SaveEvent11(event) {
    event.preventDefault();
    currentItem11 = inputEl11.value;
    console.log(currentItem11);
    localStorage.setItem("myEvent11", JSON.stringify(currentItem11));
    renderEvent11();
}
function SaveEvent12(event) {
    event.preventDefault();
    currentItem12 = inputEl12.value;
    console.log(currentItem12);
    localStorage.setItem("myEvent12", JSON.stringify(currentItem12));
    renderEvent12();
}

//lets render the events
function renderEvent1() {
    if (!localStorage.getItem("myEvent1")) {
        savedEvent1 = '';
    } else { savedEvent1 = JSON.parse(localStorage.getItem("myEvent1")) }
    inputEl1.value = savedEvent1;
}
function renderEvent2() {
    if (!localStorage.getItem("myEvent2")) {
        savedEvent2 = '';
    } else { savedEvent2 = JSON.parse(localStorage.getItem("myEvent2")) }
    inputEl2.value = savedEvent2;
}
function renderEvent3() {
    if (!localStorage.getItem("myEvent3")) {
        savedEvent3 = '';
    } else { savedEvent3 = JSON.parse(localStorage.getItem("myEvent3")) }
    inputEl3.value = savedEvent3;
}
function renderEvent4() {
    if (!localStorage.getItem("myEvent4")) {
        savedEvent4 = '';
    } else { savedEvent4 = JSON.parse(localStorage.getItem("myEvent4")) }
    inputEl4.value = savedEvent4;
}
function renderEvent5() {
    if (!localStorage.getItem("myEvent5")) {
        savedEvent5 = '';
    } else { savedEvent5 = JSON.parse(localStorage.getItem("myEvent5")) }
    inputEl5.value = savedEvent5;
}
function renderEvent9() {
    if (!localStorage.getItem("myEvent9")) {
        savedEvent9 = '';
    } else { savedEvent9 = JSON.parse(localStorage.getItem("myEvent9")) } inputEl9.value = savedEvent9;
}
function renderEvent10() {
    if (!localStorage.getItem("myEvent10")) {
        savedEvent10 = '';
    } else { savedEvent10 = JSON.parse(localStorage.getItem("myEvent10")) } inputEl10.value = savedEvent10;
}
function renderEvent11() {
    if (!localStorage.getItem("myEvent11")) {
        savedEvent11 = '';
    } else { savedEvent11 = JSON.parse(localStorage.getItem("myEvent11")) } inputEl11.value = savedEvent11;
}
function renderEvent12() {
    if (!localStorage.getItem("myEvent12")) {
        savedEvent12 = '';
    } else { savedEvent12 = JSON.parse(localStorage.getItem("myEvent12")) }
    inputEl12.value = savedEvent12;
}
//we want this to show at all times
renderEvent1()
renderEvent2()
renderEvent3()
renderEvent4()
renderEvent5()
renderEvent9()
renderEvent10()
renderEvent11()
renderEvent12()
//I want to be able to save each item and put it in the respective space,way to do it without making code explode?
//code for playing later
// var saveBtn = document.querySelectorAll("button")
// function saveEvent(event) {
//     event.preventDefault()
//     for (var a = 0; a < saveBtn.length; a++) {

//     }
// }