const form = document.getElementById("jk-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document.getElementById("confirmpassword").value.trim();

    let isValid = true;

    // validation
    if (name === "") {
        setError("fullname", "Name is required");
        isValid = false;
    } else {
        setSuccess("fullname");
    }

    if (email === "") {
        setError("email", "Email is required");
        isValid = false;
    } else if (!validateEmail(email)) {
        setError("email", "Invalid email format");
        isValid = false;
    } else {
        setSuccess("email");
    }

    if (password === "") {
        setError("password", "Password is required");
        isValid = false;
    } else if (password.length < 8) {
        setError("password", "Password must be at least 8 characters");
        isValid = false;
    } else {
        setSuccess("password");
    }

    if (confirmpassword === "") {
        setError("confirmpassword", "Confirm password is required");
        isValid = false;
    } else if (confirmpassword !== password) {
        setError("confirmpassword", "Passwords do not match");
        isValid = false;
    } else {
        setSuccess("confirmpassword");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function setError(id, message) {
    const element = document.getElementById(id);
    element.classList.add("error");
    element.classList.remove("success");
    element.nextElementSibling.innerText = message;
}

function setSuccess(id) {
    const element = document.getElementById(id);
    element.classList.remove("error");
    element.classList.add("success");
    element.nextElementSibling.innerText = "";
}
