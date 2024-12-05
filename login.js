let userName = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

login.addEventListener("click", () => {
    if (userName.value === "admin" && passwordRegx.test(password.value)) {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
    
}) 