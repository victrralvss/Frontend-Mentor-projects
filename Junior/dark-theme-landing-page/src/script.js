//ELEMENTS
const userEmail = document.querySelector(".email-input");
const sendEmail = document.querySelector(".submit-btn");
const errorMessage = document.querySelector(".email-input__label");

sendEmail.addEventListener("click", (e) => {
  const regex = /^([\w\.-]+)@([a-z0-9]+)\.([a-z]+)(\.[A-Z]+)*$/i;
  const email = userEmail.value;

  if (!regex.test(email)) {
    errorMessage.classList.add("active");
    errorMessage.textContent = "Please enter a valid email address";
  } else {
    errorMessage.classList.remove("active");
  }
});
