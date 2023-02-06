//ELEMENTS
const userEmail = document.querySelector(".email-input");
const inputs = document.querySelectorAll(".input-type");
const statusMsg = document.querySelectorAll(".status");
const icons = document.querySelectorAll(".status-icon");
const submitButton = document.querySelector(".claim");

//FUNCTIONS

function emailValidation(emailCheck) {
  const regex = /^([\w\.-]+)@([\w-]+)\.([A-Z]+)(\.[a-z])*/i;
  return regex.test(emailCheck) ? true : false;
}

function validateInput(inputId) {
  let element = document.querySelector(`#${inputId}`);

  statusMsg.forEach((label) => {
    let labelFor = label.getAttribute("for");
    let nameToAlert = element.getAttribute("placeholder");

    if (inputId === labelFor) {
      if (element.getAttribute("type") === "email") {
        if (!emailValidation(element.value)) {
          label.textContent = `Looks like this is not an email`;
          element.classList.add("alert");
          label.classList.add("alert");
        } else {
          element.classList.remove("alert");
          label.classList.remove("alert");
        }
      } else if (!element.value) {
        label.textContent = `${nameToAlert} cannot be empty!`;
        element.classList.add("alert");
        label.classList.add("alert");
      } else {
        element.classList.remove("alert");
        label.classList.remove("alert");
      }
    }
  });

  icons.forEach((icon) => {
    let iconFor = icon.classList;
    let currentInputName = element.getAttribute("name");

    if (iconFor.contains(currentInputName)) {
      if (element.classList.contains("alert")) {
        icon.classList.add("alert");
      } else {
        icon.classList.remove("alert");
      }
    }
  });
}

submitButton.addEventListener("click", () => {
  inputs.forEach((input) => {
    validateInput(input.id);
  });
});
