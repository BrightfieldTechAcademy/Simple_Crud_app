const form = document.querySelector("#form")
let table = document.querySelector("#students-table")
let studentsArr = JSON.parse(localStorage.getItem("students")) || [];

const addToUi = (std) => {
let tr = document.createElement('tr')

tr.innerHTML = `
        <td>${std.id}</td>
        <td>${std.name}</td>
        <td>${std.age}</td>
        <td>${std.email}</td>
        <td>${std.phone}</td>
        <td>
        <button 
            id="${std.id}" 
            data-id="${std.id}" 
            onClick="deleteStudent(${std.id})"
        >Delete</button>
        </td>
    `
table.appendChild(tr)
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const studentData = {
        id: "BTA00" + (studentsArr.length + 1),     
        name: form.name.value,
        age: form.age.value,
        email: form.email.value,
        phone: form.tel.value
    }
    addToUi(studentData)
    form.reset() 
    studentsArr.push(studentData)
    localStorage.setItem("students", JSON.stringify(studentsArr))
})  

document.addEventListener("DOMContentLoaded", () => {
    studentsArr.forEach(student => {
        addToUi(student)
    });
})


const deleteStudent = (id) => {
    let studentId = id.dataset.id;
    document.getElementById(studentId).parentElement.parentElement.remove()
}