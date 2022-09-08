function searchStud(){

    let input = document.getElementById("searches");

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    let last = 0;

    for(let i=0; i<Students.length; i++)
    {
        if(parseFloat(input.value) == Students[i].idNum)
        {
            displayStud(i);
        }
    }
    input.value = "";
}

document.getElementById("btnSubmit").onclick = function (e) {
    e.preventDefault();
    searchStud();
}

function displayStud(data){

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    let rowNum = tableBody.rows.length;

    let studList = document.getElementById("tableBody");

    let row = studList.insertRow(rowNum);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    let col6 = row.insertCell(5);
    let col7 = row.insertCell(6);
    let col8 = row.insertCell(7);
    let col9 = row.insertCell(8);
    let col10 = row.insertCell(9);
    let col11 = row.insertCell(10);
    let col12 = row.insertCell(11);
    col1.innerHTML = Students[data].name;
    col2.innerHTML = Students[data].idNum;
    col3.innerHTML = Students[data].address;
    col4.innerHTML = Students[data].age;
    col5.innerHTML = Students[data].gender;
    col6.innerHTML = Students[data].email;
    col7.innerHTML = Students[data].class;
    col8.innerHTML = Students[data].phone;
    col9.innerHTML = Students[data].interest;
    col10.innerHTML = Students[data].username;
    col11.innerHTML = Students[data].password;
    col12.innerHTML = `<button id="btnEdit" onclick="updateStud()">Edit</button> <button id="btnDlt" onclick="deleteStud()">Delete</button>`;
}

function updateStud(){
    let n = document.getElementById("tableBody").getElementsByTagName("td");
    let m = document.getElementById("editSpace").getElementsByTagName("td");
    
    //create element
    let sName = document.createElement("input");
    sName.id = "nama";
    sName.type = "text";
    sName.onchange = function(){changeData};

    let sID = document.createElement("input");
    sID.id = "ic";
    sID.type = "number";
    sID.onchange = function(){changeData};

    let sAddress = document.createElement("input");
    sAddress.id = "address";
    sAddress.type = "text";
    sAddress.onchange = function(){changeData};

    let sAge = document.createElement("input");
    sAge.id = "age";
    sAge.type = "number";
    sAge.onchange = function(){changeData};

    let sGender = document.createElement("input");
    sGender.id = "gender";
    sGender.type = "text";
    sGender.onchange = function(){changeData};

    let sEmel = document.createElement("input");
    sEmel.id = "emel";
    sEmel.type = "email";
    sEmel.onchange = function(){changeData};

    let sClass = document.createElement("input");
    sClass.id = "kelas";
    sClass.type = "text";
    sClass.onchange = function(){changeData};

    let sPhone = document.createElement("input");
    sPhone.id = "phone";
    sPhone.type = "text";
    sPhone.onchange = function(){changeData};

    let sInterest = document.createElement("input");
    sInterest.id = "interest";
    sInterest.type = "text";
    sInterest.onchange = function(){changeData};
    
    let sUsername = document.createElement("input");
    sUsername.id = "username";
    sUsername.type = "text";
    sUsername.onchange = function(){changeData};

    let sPass = document.createElement("input");
    sPass.id = "password";
    sPass.type = "text";
    sPass.onchange = function(){changeData};

    //place inside td
    m[0].appendChild(sName);
    m[1].appendChild(sID);
    m[2].appendChild(sAddress);
    m[3].appendChild(sAge);
    m[4].appendChild(sGender);
    m[5].appendChild(sEmel);
    m[6].appendChild(sClass);
    m[7].appendChild(sPhone);
    m[8].appendChild(sInterest);
    m[9].appendChild(sUsername);
    m[10].appendChild(sPass);

    //pass value inside input
    sName.value = n[0].innerHTML;
    sID.value = n[1].innerHTML;
    sAddress.value = n[2].innerHTML;
    sAge.value = n[3].innerHTML;
    sGender.value = n[4].innerHTML;
    sEmel.value = n[5].innerHTML;
    sClass.value = n[6].innerHTML;
    sPhone.value = n[7].innerHTML;
    sInterest.value = n[8].innerHTML;
    sUsername.value = n[9].innerHTML;
    sPass.value = n[10].innerHTML;
}

function deleteStud(){
    let studList = document.getElementById("tableBody").getElementsByTagName("td");

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    for(let i=0;i<Students.length;i++)
    {
        if(Students[i].idNum == parseFloat(studList[1].innerHTML))
        {
            Students.splice(i,1);
            i = Students.length;
        }
    }

    //update localStorage
    let Students_serialized = JSON.stringify(Students);

    localStorage.setItem("student-info", Students_serialized);

    //notification
    alert("Data is successfully deleted.")

    //reload the page
    location.reload();
}

function changeData(){
    let j = document.getElementById("editSpace").getElementsByTagName("input");

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);
    
    for(let i=0;i<Students.length;i++)
    {
        if(Students[i].idNum == j[1].value)
        {
            Students.splice(i,1);
            i = Students.length;
        }
    }

    let pushing = Students.push({name:j[0].value, idNum:j[1].value, age:j[3].value, gender:j[4].value,
         address:j[2].value, email:j[5].value, phone:j[7].value, username:j[9].value,
          password:j[10].value, class:j[6].value, interest:j[8].value});
    console.log(Students);

    //update localStorage
    let Students_serialized = JSON.stringify(Students);

    localStorage.setItem("student-info", Students_serialized);

    //notification
    alert("Data successfully changed.")

    //reload the page
    location.reload();
}

function clearData(){
    let a = document.getElementById("nama");
    let b = document.getElementById("ic");
    let c = document.getElementById("address");
    let d = document.getElementById("age");
    let e = document.getElementById("gender");
    let f = document.getElementById("emel");
    let g = document.getElementById("kelas");
    let h = document.getElementById("phone");
    let i = document.getElementById("interest");
    let j = document.getElementById("username");
    let k = document.getElementById("password");

    a.parentNode.removeChild(a);
    b.parentNode.removeChild(b);
    c.parentNode.removeChild(c);
    d.parentNode.removeChild(d);
    e.parentNode.removeChild(e);
    f.parentNode.removeChild(f);
    g.parentNode.removeChild(g);
    h.parentNode.removeChild(h);
    i.parentNode.removeChild(i);
    j.parentNode.removeChild(j);
    k.parentNode.removeChild(k);
}

document.getElementById("confirmBtns").onclick = function () {
    changeData();
    clearData();
}

document.getElementById("printBtns").onclick = function () {
    window.print();
}