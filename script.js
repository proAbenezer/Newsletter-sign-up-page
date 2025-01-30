const form = document.getElementById("form");
const emailField = document.getElementById("email-field");
const message = document.getElementById("message");
const grid = document.getElementById("grid");
const popup = document.getElementById("popup");
const userEmailField = document.getElementById("subscribered-email");
const dismissBtn = document.getElementById("dismiss-btn");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email) => emailRegex.test(email);

const handleSubmit = (e) => {
  e.preventDefault();
  const userEmail = emailField.value;
  if (!emailField || userEmail == "") {
    message.innerHTML = "Please enter your email";
    return;
  }
  if (!validateEmail(userEmail)) {
    message.innerHTML = "Valid email required";
    emailField.setAttribute("id", "invalid-email");
    return;
  }
  emailField.removeAttribute("id");
  message.innerHTML = "";

  popup.style.display = "flex";
  grid.style.display = "none";
  userEmailField.innerHTML = userEmail;
  emailField.value = "";
};
const handleClicked = () => {
  popup.style.display = "none";
  grid.style.display = "flex";
};

dismissBtn.addEventListener("click", handleClicked);
form.addEventListener("submit", handleSubmit);
