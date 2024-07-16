import {
  validateField,
  checkMaxLength,
  checkIfKeyIsANumber,
} from "./valida-input.js";

const adminButton = document.querySelector(".header__admin");

const form = document.querySelector(".product");
const inputs = document.querySelectorAll(
  ".product input, .product select, .product textarea"
);

adminButton.addEventListener("click", () => {
  window.location = "produtos.html";
});

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => validateField(e.target));

  if (input.getAttribute("maxLength")) {
    input.addEventListener("input", (e) => checkMaxLength(e.target));
  }

  if (input.type === "number") {
    input.addEventListener("keyup", (e) => checkIfKeyIsANumber(e));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = e.target.querySelector(".form__message");
  const success = addProduct();

  if (success) {
    text.innerText = "Produto adicionado com sucesso!";
    text.classList.add("form__message--success");

    setTimeout(() => {
      text.classList.remove("form__message--success");
      text.innerText = "";
    }, 5000);
  } else {
    text.innerText =
      "Error al guardar el producto. Por favor, comprueba que los campos se han rellenado correctamente.";
    text.classList.add("form__message--error");

    setTimeout(() => {
      text.classList.remove("form__message--error");
      text.innerText = "";
    }, 5000);
  }

  form.reset();
});

function addProduct() {
  let invalidInput = 0;

  inputs.forEach((input) => {
    if (!input.validity.valid) {
      invalidInput++;
    }
  });

  return invalidInput < 0;
}
