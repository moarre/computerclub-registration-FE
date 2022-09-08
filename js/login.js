//setup Array
function reg() {
    let Students = [
        { name: "Ariff", idNum: 990916, age: 15, gender: "Male", address: "No 3, Taman Indah, Selangor", email: "moar@yahoo.com", phone: "0101001234", username: "moar", password:"moar123", class: "A", interest:"Robotic"},
        { name: "Fatimah", idNum: 990917, age: 13, gender: "Female", address: "No 5, Taman Damai, Perak", email: "timah@yahoo.com", phone: "0125365466", username: "timahAnggun", password:"timah123", class: "B", interest:"Networking"},
        { name: "Samsol", idNum: 990918, age: 14, gender: "Male", address: "No 7, Taman Sentosa, Johor", email: "sol@gmail.com", phone: "0165556342", username: "solGagah", password:"sol123", class: "C", interest:"Hacking"},
        { name: "Udin", idNum: 990919, age: 15, gender: "Male", address: "No 3, Taman Aman, Pahang", email: "dinberamboi@gmail.com", phone: "0109908762", username: "dinSempoi", password:"din123", class: "A", interest:"Gaming"},
    ];

    //Set data
    let Students_serialized = JSON.stringify(Students);

    localStorage.setItem("student-info", Students_serialized);
}

document.getElementById("setArray").onclick = function (e) {
    e.preventDefault();
    reg();
}

//Login
//grab data from localStorage
let Students = localStorage.getItem('student-info');
Students = JSON.parse(Students);

function validateUser() {
    let inputName = document.getElementById("username");
    let inputPass = document.getElementById("pass");
    let count = 0;
    
    for (let i = 0; i < Students.length; i++) {
        if (inputName.value == Students[i].username && inputPass.value == Students[i].password) {
            count = i;
            //store in session
            sessionStorage.setItem("AuthenticationState", "Authenticated");
            //expire
            sessionStorage.setItem("AuthenticationExpires", Date.now());
            //push to admin page
            window.open('crud.html');
            //reload page
            location.reload();
        }
    }
    if (inputName.value != Students[count].username && inputPass.value != Students[count].password) {
        alert("Wrong Input");
        location.reload();
    }
}

document.getElementById("submitBtn").onclick = function () {
    validateUser();
}