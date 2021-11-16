const btn = document.getElementById("getstart");
btn.addEventListener("click", foo)

if (localStorage.getItem("Name")) {
    document.getElementById("name").value = localStorage.getItem("Name");
}

function foo() {
    if (document.getElementById("name").value) {

        const userName = localStorage.setItem("Name", document.getElementById("name").value);
        location.href = 'tasks/tasks.html'
    } else {
        alert('Please enter your name')
    }

}