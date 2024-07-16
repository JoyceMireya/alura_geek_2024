import { checkMaxLength, validateField } from "./valida-input.js";

const contactForm = document.querySelector(".contact__form");
const nameInput = document.getElementById("name");
const messageTxt = document.getElementById("message");

nameInput.addEventListener("blur", (e) => validateField(e.target));
messageTxt.addEventListener("blur", (e) => validateField(e.target));

nameInput.addEventListener("input", (e) => checkMaxLength(e.target));
messageTxt.addEventListener("input", (e) => checkMaxLength(e.target));

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = e.target.querySelector(".form__message");

  if (nameInput.validity.valid && messageTxt.validity.valid) {
    text.innerText = "Mensaje enviado con éxito!";
    text.classList.add("form__message--success");

    setTimeout(() => {
      text.classList.remove("form__message--success");
      text.innerText = "";
    }, 5000);
  } else {
    text.innerText =
      "Se produjo un error al enviar el mensaje. Por favor, comprueba que los campos se han rellenado correctamente.";
    text.classList.add("form__message--error");

    setTimeout(() => {
      text.classList.remove("form__message--error");
      text.innerText = "";
    }, 5000);
  }

  // limpiar campos
  contactForm.reset();
});
