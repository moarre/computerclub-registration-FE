//add data in register form
function addStud() {

    //grab input value

    //kutip data
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    //convert nodelist to object
    //acc is prevValue
    //input is currentValue
    let convNodelist = Array.from(document.querySelectorAll
        ('#registerForm input[type="text"], input[type="number"], input[type="email"], input[type="radio"], input[type="checkbox"]:checked, select, textarea')).reduce((acc, input) => {

            if (input.type == "checkbox") {
                if (input.name in acc)
                    acc[input.name].push(input.value)
                else
                    acc[input.name] = [input.value]
            }
            else
                acc = { ...acc, [input.name]: input.value }

            return acc;
        }, {});

    //add data
    Students.push(convNodelist);
    console.log(Students);

    //update localStorage
    let Students_serialized = JSON.stringify(Students);

    localStorage.setItem("student-info", Students_serialized);

    console.log(localStorage);

}

document.getElementById("regBtn").onclick = function (e) {
    e.preventDefault();
    notifyInfo();
}

/* block special char in ID and type numbers only */
function checkSpcialChar(event) {
    if (!((event.keyCode >= 48) && (event.keyCode <= 57))) {
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
}

/* select only 1 checkbox */
function selectiveCheck() {
    var checkedChecks = document.querySelectorAll(".check:checked");
    if (checkedChecks.length >= max + 1)
        return false;
}

var checks = document.querySelectorAll(".check");
var max = 1;
for (var i = 0; i < checks.length; i++) {
    checks[i].onclick = selectiveCheck;
}

/* clear data after submit */
function clearFormData() {
    document.getElementById("form").reset();
}

/* notification info */
function notifyInfo() {
    let input = document.getElementById("form").getElementsByTagName("input");


    if (input[0].value == "" || input[1].value == "" || input[2].value == "" || input[4].value == "" || input[6].value == "" || input[7].value == "" || input[8].value == "") {
        alert("Please fill the empty field!");
    }
    else {
        alert("Data successfully sent!");
        addStud();
        clearFormData();
    }

}