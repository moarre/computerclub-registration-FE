function getMembers(info){

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    let rowNo = tableMembers.rows.length;

    let memberList = document.getElementById("tableMembers");

    let row = memberList.insertRow(rowNo);
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    col1.innerHTML = Students[info].name;
    col2.innerHTML = Students[info].idNum;
    col3.innerHTML = Students[info].email;
    col4.innerHTML = Students[info].class;
    col5.innerHTML = Students[info].phone;
}

function listMembers(){

    //grab data from localStorage
    let Students = localStorage.getItem('student-info');
    Students = JSON.parse(Students);

    for(let i=0; i<Students.length; i++)
    {
        getMembers(i);
    }
}

document.getElementById("seeAllBtns").onclick = function () {
    listMembers();
}