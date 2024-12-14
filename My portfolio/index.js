// Toggle theme functionality
const themeToggleBtn = document.getElementById("toggle-theme");
themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Getting the "Contact Me" form active
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const messageValue = document.getElementById("message").value.trim();

    // Basic validation
    if (!nameValue || !emailValue || !messageValue) {
        alert("Please fill out all fields.");
        return;
    }

    const response = {
        nameValue,
        emailValue,
        messageValue,
        date: new Date().toISOString()
    };

    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    responses.push(response);

    localStorage.setItem("responses", JSON.stringify(responses));
    console.log(responses);

    alert("Thank you for your message, I will get in touch with you ASAP!");

    // Optionally reset form
    document.getElementById("contact-form").reset();
});

// Admin login implementation
function showAdminLogin() {
    document.getElementById("admin-login").style.display = "block";
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = "pavan";
    const storedPassword = "password";

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-section").style.display = "block";

        alert("Welcome, Pavan!");

        displayStoredUserResponses();
    } else {
        alert("Invalid Credentials, please try again.");
    }
});

// Display stored user responses
function displayStoredUserResponses() {
    const responseContainer = document.getElementById("user-responses");
    const responses = JSON.parse(localStorage.getItem("responses")) || [];

    responseContainer.innerHTML = "";

    responses.forEach((response) => {
        const responseElement = document.createElement("div");
        responseElement.innerHTML = `
            <p><strong>Name:</strong> ${response.nameValue}</p>
            <p><strong>Email:</strong> ${response.emailValue}</p>
            <p><strong>Message:</strong> ${response.messageValue}</p>
            <p><strong>Date:</strong> ${response.date}</p>
            <hr>
        `;
        responseContainer.appendChild(responseElement);
    });
}