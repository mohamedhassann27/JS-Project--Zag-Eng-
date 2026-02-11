let users = JSON.parse(localStorage.getItem("users")) || [];

const params = new URLSearchParams(window.location.search);
const userId = parseInt(params.get("id"));

const userToEdit = users.find(u => u.id === userId);

if (userToEdit) {
    document.getElementById("name").value = userToEdit.name;
    document.getElementById("email").value = userToEdit.email;
    document.getElementById("age").value = userToEdit.age;
    document.getElementById("specialty").value = userToEdit.specialty;
}

document.getElementById("editForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const index = users.findIndex(u => u.id === userId);

    if (index !== -1) {

        users[index] = {
            id: userId,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            age: document.getElementById("age").value,
            specialty: document.getElementById("specialty").value
        };

        localStorage.setItem("users", JSON.stringify(users));

        window.location.href = "index.html";
    }
});
