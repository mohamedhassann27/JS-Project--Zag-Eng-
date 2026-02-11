function addUser() {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const specialty = document.getElementById("specialty").value;

    if (!name || !email || !age || !specialty) {
        alert("Please fill all fields");
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        age,
        specialty
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "index.html";
}

