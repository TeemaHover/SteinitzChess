// const scrollContainer = document.querySelector("main");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

var modalLesson0= document.getElementById("myModalLesson0");
var modalLesson1 = document.getElementById("myModalLesson1");
var modalLesson2 = document.getElementById("myModalLesson2");
var modalLesson3 = document.getElementById("myModalLesson3");
var modalLesson4 = document.getElementById("myModalLesson4");
var modalLesson5 = document.getElementById("myModalLesson5");
var btnLesson = document.getElementsByClassName("myBtnLesson");
var modal_Lesson = document.getElementsByClassName("modal-Lesson");
var spanLesson = document.getElementsByClassName("closeLesson")[0];

// btnLesson.onclick = function() {
//   modalLesson.style.display = "block";
// }
function openDisplay0(){
  modalLesson0.style.display = "block";
}
function openDisplay1(){
  modalLesson1.style.display = "block";
}
function openDisplay2(){
  modalLesson2.style.display = "block";
}
function openDisplay3(){
  modalLesson3.style.display = "block";
}
function openDisplay4(){
  modalLesson4.style.display = "block";
}
function openDisplay5(){
  modalLesson5.style.display = "block";
}

function closeDisplay0(){
  modalLesson0.style.display = "none";
}
function closeDisplay1(){
  modalLesson1.style.display = "none";
}
function closeDisplay2(){
  modalLesson2.style.display = "none";
}
function closeDisplay3(){
  modalLesson3.style.display = "none";
}
function closeDisplay4(){
  modalLesson4.style.display = "none";
}
function closeDisplay5(){
  modalLesson5.style.display = "none";
}
spanLesson.onclick = function() {
  modalLesson0.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalLesson0) {
      modalLesson0.style.display = "none";
  }
    if (event.target == modalLesson1) {
      modalLesson1.style.display = "none";
  }
    if (event.target == modalLesson2) {
      modalLesson2.style.display = "none";
  }
    if (event.target == modalLesson3) {
      modalLesson3.style.display = "none";
  }
    if (event.target == modalLesson4) {
      modalLesson4.style.display = "none";
  }
    if (event.target == modalLesson5) {
      modalLesson5.style.display = "none";
  }
}