

const signInButton = document.getElementById("sign-in-button");
const signUpButton = document.getElementById("sign-up-button");

// Set the default background color of both buttons to gray.
signInButton.style.backgroundColor = "#f0f0f0";
signUpButton.style.backgroundColor = "#f0f0f0";


signUpButton.style.backgroundColor = "white";

// When the user clicks on the sign in button, make it the active button and set its background color to white.
signInButton.addEventListener("click", () => {
  signInButton.style.backgroundColor = "white";
  signUpButton.style.backgroundColor = "#f0f0f0";
});

// When the user clicks on the sign up button, make it the active button and set its background color to white.
signUpButton.addEventListener("click", () => {
  signUpButton.style.backgroundColor = "white";
  signInButton.style.backgroundColor = "#f0f0f0";
});

// Hide the sign in form by default.
document.getElementById("sign-in-form").style.display = "none";

// Show the sign up form by default.
document.getElementById("sign-up-form").style.display = "block";

// When the user clicks on the sign in button, show the sign in form.
signInButton.addEventListener("click", () => {
  document.getElementById("sign-in-form").style.display = "block";
  document.getElementById("sign-up-form").style.display = "none";
});

// When the user clicks on the sign up button, show the sign up form.
signUpButton.addEventListener("click", () => {
 document.getElementById("sign-in-form").style.display = "none";
  document.getElementById("sign-up-form").style.display = "block";
});

