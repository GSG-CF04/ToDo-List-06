// Start dark and light theme toggle
let toggleBtn = document.querySelector('.toggle-btn')
let bodyElement = document.querySelector('body')

function setDarkTheme(){
    bodyElement.classList.toggle('dark')
}

toggleBtn.addEventListener('click', switchTheme)

function switchTheme() {
let darkMode = localStorage.getItem('dark')

if (darkMode !== 'on') {
    setDarkTheme()
    darkMode = localStorage.setItem('dark', 'on')
} else {
    setDarkTheme()
    darkMode = localStorage.setItem('dark', 'off')
}
}
let darkMode = localStorage.getItem('dark')
if(darkMode === 'on'){
    setDarkTheme()
}
// Finish dark and light theme toggle

// Start userName

const name = localStorage.getItem("Name");
console.log(localStorage.getItem("Name"))
const greeting = document.querySelector("h3");
greeting.textContent = `Hi, ${name}`;

// End userName




