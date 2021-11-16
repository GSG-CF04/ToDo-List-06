// Start dark and light theme toggle
let toggleBtn = document.querySelector(".toggle-btn");
let bodyElement = document.querySelector("body");

function setDarkTheme() {
  bodyElement.classList.toggle("dark");
}

toggleBtn.addEventListener("click", switchTheme);

function switchTheme() {
  let darkMode = localStorage.getItem("dark");

  if (darkMode !== "on") {
    setDarkTheme();
    darkMode = localStorage.setItem("dark", "on");
  } else {
    setDarkTheme();
    darkMode = localStorage.setItem("dark", "off");
  }
}
let darkMode = localStorage.getItem("dark");
if (darkMode === "on") {
  setDarkTheme();
}
// Finish dark and light theme toggle

// Start userName

const name = localStorage.getItem("Name");
console.log(localStorage.getItem("Name"));
const greeting = document.querySelector("h3");
greeting.textContent = `Hi, ${name}`;

// End userName
let input = document.getElementById("inp");
let details = document.getElementById("details");
let date = document.getElementById("date");
let add = document.getElementById("submit");
let parent = document.getElementById("todolist");
let div = document.createElement("div");
let plus = document.getElementById("plus");

plus.addEventListener("click", function () {
    openWindow("add");
});

//clicking on add buttom

function openWindow(option) {
  if (option == "add") {
    add.value = "add";
    document.getElementById("myWindow").style.display = "block";
    if (input.value !== "" && details.value !== "" && date.value !== "") {
        addItems(input.value, details.value, date.value);
        input.value = "";
        details.value = "";
        date.value = "";
    }
}
}

// empty array to store the tasks
let todoItems = [];

// Check if Tteres tasks in Local storage
if (localStorage.getItem("Tasks")) {
    todoItems = JSON.parse(localStorage.getItem("Tasks"));
}

// Trigger get data from localstorage function
getDataFromLocalStorage();

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("Tasks");
    if (data) {
    let tasks = JSON.parse(data);
    showList(tasks);
    }
}

add.addEventListener("click", function (event) {
document.getElementById("myWindow").style.display = "none";
event.preventDefault();
if (add.value == "add") {
if (input.value !== "" && details.value !== "" && date.value !== "") {
    addItems(input.value, details.value, date.value);
    input.value = "";
    details.value = "";
    date.value = "";
}
}
});
function addItems() {
let idItem = Date.now();
const todo = {
    title: input.value,
    details: details.value,
    date: date.value,
    checked: false,
    id: idItem,
};
let container = document.createElement("div");
container.setAttribute("data-id", todo.id);
if (localStorage.getItem("Tasks") === null) {
todoItems = [];
} else {
todoItems = JSON.parse(localStorage.getItem("Tasks"));
}
todoItems.push(todo);
// Adding into LocalStorge
localStorage.setItem("Tasks", JSON.stringify(todoItems));
showList();
}
function showList() {
let data = JSON.parse(localStorage.getItem("Tasks"));
parent.innerHTML = "";
if (data) {
    data.forEach(function (item) {
      // Create a node
    let container = document.createElement("div");
    container.setAttribute("class", "task");
    container.setAttribute("data-id", item.id);
    parent.appendChild(container);
    container.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
    container.innerHTML = `<input type='checkbox'/> 
            <h3 class="taskTitle">${item.title}</h3>
            <p>${item.details}<br>${item.date}</p>
            <i class='fas fa-trash delete' id="delete" ></i><i class='fas fa-edit edit'></i>`;
    parent.insertBefore(container, parent.childNodes[0]);
});
}
}
