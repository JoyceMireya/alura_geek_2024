export function validateField(input) {
  const errorMessageElement = input.parentElement.querySelector(
    ".input__validation-message"
  );

  if (input.validity.typeMismatch) {
    input.setCustomValidity("Ingrese un email valido.");
    errorMessageElement.innerText = "Ingrese un email valido.";
    input.classList.add("input--invalid");
  } else if (input.validity.tooLong) {
    const maxLength = input.getAttribute("maxLength");
    input.setCustomValidity(
      `Has exedido el número maximo de ${maxLength} caracteres`
    );
    errorMessageElement.innerText = `Has exedido el número maximo de ${maxLength} caracteres`;
    input.classList.add("input--invalid");
  } else if (input.validity.rangeUnderflow) {
    input.setCustomValidity("Ingrese un monto valido.");
    errorMessageElement.innerText = "Ingrese un monto valido.";
    input.classList.add("input--invalid");
  } else if (input.validity.stepMismatch || input.validity.badInput) {
    input.setCustomValidity("Solo 2 decimales permitidos.");
    errorMessageElement.innerText = "Solo 2 decimales permitidos.";
    input.classList.add("input--invalid");
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Este campo no puede estar vacio.");
    errorMessageElement.innerText = "Este campo no puede estar vacio.";
    input.classList.add("input--invalid");
  } else {
    errorMessageElement.innerText = "";
    input.classList.remove("input--invalid");
    input.setCustomValidity("");
  }
}

export function checkMaxLength(input) {
  const currentLength = input.value.length;
  const maxLength = input.getAttribute("maxLength");
  const charactersAvailable = maxLength - currentLength;
  const errorMessageElement = input.parentElement.querySelector(
    ".input__validation-message"
  );

  if (charactersAvailable <= 10) {
    errorMessageElement.innerText = `${charactersAvailable} caracteres disponíveis.`;
  } else {
    errorMessageElement.innerText = "";
  }
}

export function checkIfKeyIsANumber(event) {
  const errorMessageElement = event.target.parentElement.querySelector(
    ".input__validation-message"
  );
  if (event.key.match(/^[a-zA-Z]$/g)) {
    errorMessageElement.innerText =
      "Por favor, digite somente números e vírgula para separar os centavos.";
  } else {
    errorMessageElement.innerText = "";
  }
}
