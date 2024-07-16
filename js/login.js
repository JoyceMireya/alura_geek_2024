import { validateField } from "./valida-input.js";

const loginForm = document.querySelector(".login");
const loginInputs = document.querySelectorAll(".login__input");

loginInputs.forEach((input) =>
  input.addEventListener("blur", (e) => validateField(e.target))
);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUserAuthenticated = authenticateUser();
  if (isUserAuthenticated) window.location = "produtos.html";
  else showLoginError();
});

function authenticateUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  return email === "joyceRivera@alurageek.com" && password === "riveraLiberato";
}

function showLoginError() {
  const loginErrorElement = document.querySelector(".login__error");

  loginErrorElement.innerText = "Email o contraseñas son invalidas.";
  loginErrorElement.classList.add("login__error--visible");
}
