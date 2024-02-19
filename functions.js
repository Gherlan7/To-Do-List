const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    //\u00df represents the x sign in Unicode
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//This function must be used whenever we modify something
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//Here we save the data we have inserted in a local storage
//If we close the app and come back, we find the same things
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

var icon = document.getElementById("icon");
//Implementing the dark mode 
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
