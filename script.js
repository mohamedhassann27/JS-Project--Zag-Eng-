
const defaultUsers = [
    { id:1, name:"Nada", email:"nada@gmail.com", age:22, specialty:"Developer" },
    { id:2, name:"Ali", email:"ali@gmail.com", age:25, specialty:"Designer" },
    { id:3, name:"Sara", email:"sara@gmail.com", age:28, specialty:"Manager" },
    { id:4, name:"Omar", email:"omar@gmail.com", age:24, specialty:"Developer" },
    { id:5, name:"Mona", email:"mona@gmail.com", age:26, specialty:"Designer" }
];


let users = JSON.parse(localStorage.getItem("users"));


if (!users) {
    users = defaultUsers;
    localStorage.setItem("users", JSON.stringify(users));
}

const table = document.getElementById("usersTable");

function displayUsers() {

    users = JSON.parse(localStorage.getItem("users"));

    table.innerHTML = "";

    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.specialty}</td>
                <td>
                    <button class="btn edit" onclick="editUser(${user.id})">Edit</button>
                    <button class="btn delete" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteUser(id) {

    users = users.filter(user => user.id !== id);

    localStorage.setItem("users", JSON.stringify(users));

    displayUsers();
}


function editUser(id) {
    window.location.href = `edit.html?id=${id}`;
}

function goToAdd() {
    window.location.href = "add.html";
}

function resetData() {

    if (confirm("Are you sure you want to reset all data?")) {

        localStorage.setItem("users", JSON.stringify(defaultUsers));

        displayUsers();
    }
}

displayUsers();
