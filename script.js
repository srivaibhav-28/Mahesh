
let students = [];

function register() {
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;

    if(n == "" || r == "") {
        alert("Fill all fields");
    }
    else {
        students.push({name:n, roll:r});
        alert("Student Registered");
    }
}

function search() {
    let r = document.getElementById("roll").value;
    let found = false;

    for(let s of students) {
        if(s.roll == r) {
            alert("Student Found: " + s.name);
            found = true;
        }
    }

    if(!found) {
        alert("Student Not Found");
    }
}
