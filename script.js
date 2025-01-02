let facultychoice = document.querySelector('#faculties');
let groupnameinput = document.querySelector('#groupname');
let studentinput = document.querySelector('#studentammount');
let facultyinput = document.querySelector('#faculty');
let classroomA101 = document.querySelector('.A101');
let classroomB202 = document.querySelector('.B202');
let classroomC303 = document.querySelector('.C303');
let classroomD404 = document.querySelector('.D404');
let classroomE505 = document.querySelector('.E505');

let faculty = facultychoice.value;
let groupname = groupnameinput.value;
let studentammount = studentinput.value;
let facultysearch = facultyinput.value;


function ClassroomChoice(){
    let faculty = facultychoice.value;

    if (faculty === "computerscience"){
        classroomA101.classList.remove("hidden");
        classroomB202.classList.add("hidden");
        classroomC303.classList.add("hidden");
        classroomD404.classList.remove("hidden");
        classroomE505.classList.add("hidden");
    }
    if (faculty === "mathematics"){
        classroomA101.classList.add("hidden");
        classroomB202.classList.remove("hidden");
        classroomC303.classList.add("hidden");
        classroomD404.classList.add("hidden");
        classroomE505.classList.remove("hidden");
    }
    if (faculty === "physics"){
        classroomA101.classList.add("hidden");
        classroomB202.classList.add("hidden");
        classroomC303.classList.remove("hidden");
        classroomD404.classList.add("hidden");
        classroomE505.classList.add("hidden");
    }
    if (faculty === "all"){
        classroomA101.classList.remove("hidden");
        classroomB202.classList.remove("hidden");
        classroomC303.classList.remove("hidden");
        classroomD404.classList.remove("hidden");
        classroomE505.classList.remove("hidden");
    }
}
facultychoice.addEventListener('change', ClassroomChoice);
ClassroomChoice();

function resetClassrooms() {
    classroomA101.classList.add("hidden");
    classroomB202.classList.add("hidden");
    classroomC303.classList.add("hidden");
    classroomD404.classList.add("hidden");
    classroomE505.classList.add("hidden");
}

function GroupnameSearch() {
    let groupname = groupnameinput.value;

    if (groupname === "A101") {
        classroomA101.classList.remove("hidden");
    }
    else if (groupname === "B202") {
        classroomB202.classList.remove("hidden");
    } 
    else if (groupname === "C303") {
        classroomC303.classList.remove("hidden");
    } 
    else if (groupname === "D404") {
        classroomD404.classList.remove("hidden");
    } 
    else if (groupname === "E505") {
        classroomE505.classList.remove("hidden");
    }
}

function StudentAmmount() {
    let studentammount = studentinput.value;

    if (studentammount === "15") {
        classroomA101.classList.remove("hidden");
    } 
    else if (studentammount === "18") {
        classroomB202.classList.remove("hidden");
    } 
    else if (studentammount === "12") {
        classroomC303.classList.remove("hidden");
    } 
    else if (studentammount === "20") {
        classroomD404.classList.remove("hidden");
    } 
    else if (studentammount === "10") {
        classroomE505.classList.remove("hidden");
    }
}

function FacultySearch() {
    let facultysearch = facultyinput.value;

    if (facultysearch === "Computer Science") {
        classroomA101.classList.remove("hidden");
        classroomD404.classList.remove("hidden");
    } 
    else if (facultysearch === "Mathematics") {
        classroomB202.classList.remove("hidden");
        classroomE505.classList.remove("hidden");
    } 
    else if (facultysearch === "Physics") {
        classroomC303.classList.remove("hidden");
    }
}

let filter = document.querySelector('#filter');
filter.addEventListener('click', function(event) {
    event.preventDefault();

    resetClassrooms();  
    GroupnameSearch();
    StudentAmmount();
    FacultySearch();
});


let classrooms = [
    { name: 'A101', capacity: 15 },
    { name: 'B202', capacity: 18 },
    { name: 'C303', capacity: 12 },
    { name: 'D404', capacity: 20 },
    { name: 'E505', capacity: 10 }
];

function sortClassrooms(classrooms) {
    classrooms.sort((a, b) => a.capacity - b.capacity);
}

function displayClassrooms() {
    sortClassrooms(classrooms);

    const container = document.querySelector('.classrooms');

    classrooms.forEach(classroom => {
        const classroomElement = document.querySelector(`.${classroom.name}`)
        container.appendChild(classroomElement);
    });
}

let sort = document.querySelector('#sort');
sort.addEventListener('click', function(event) {
    event.preventDefault();
    displayClassrooms();
});

