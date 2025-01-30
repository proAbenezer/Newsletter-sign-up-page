const form = document.getElementById("form");
const emailField = document.getElementById("email-field");
const message = document.getElementById("message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email) => emailRegex.test(email);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!emailField || emailField.value == "") {
    message.innerHTML = "Please enter your email";
    return;
  }
  if (!validateEmail(emailField.value)) {
    message.innerHTML = "Valid email required";
    emailField.setAttribute("id", "invalid-email");
    console.log(emailField.classList);
    return;
  }
  emailField.removeAttribute("id");
  message.innerHTML = "";
};

form.addEventListener("submit", handleSubmit);
