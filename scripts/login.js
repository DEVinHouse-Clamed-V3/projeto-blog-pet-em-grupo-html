const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userIsValid = validadeUser(email, password)

    if (userIsValid) {

        window.location.assign("./post.html")

    } else {

        document.getElementById("email").classList.remove("outline");
        document.getElementById("email").classList.add("outlineError");
        document.getElementById("email").style.backgroundColor = "#ff660041"
        document.getElementById("errorEmail").innerText = "E-mail ou senha são inválidos";

        document.getElementById("password").classList.remove("outline");
        document.getElementById("password").classList.add("outlineError");
        document.getElementById("password").style.backgroundColor = "#ff660041"
    }

}

function validadeUser(email, password) {
    return usuarios.some(user => user.email === email && user.password === password)
}

function handlePaste(event) {
    event.preventDefault();

    const password = document.getElementById("password");
    const pastedData = (event.clipboardData).getData('text');
    const currentPasswordValue = password.value;
    const newPasswordValue = currentPasswordValue + pastedData + pastedData;
    password.value = newPasswordValue;
}

function showConfirmationMessage() {
    const url = new URLSearchParams(window.location.search);

    if (url.get("form") === "submit") {
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.classList.remove("invisible");
    }
}

document.getElementById("password").addEventListener("paste", handlePaste);
document.getElementById("loginForm").addEventListener("submit", handleLogin);
document.addEventListener("DOMContentLoaded", showConfirmationMessage);