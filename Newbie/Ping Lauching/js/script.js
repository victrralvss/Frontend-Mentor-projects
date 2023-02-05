"use strict";

//ELEMENTS
const sumbitBtn = document.querySelector(".submit-btn");
const userEmail = document.querySelector(".email");
const message = document.querySelector(".status");

//FUNCTIONS
function validateEmail() {
  const regex = /^([\w\.-]+)@([\w-]+)\.([A-Z]+)(\.[a-z])*$/i;
  const email = userEmail.value;

  if (regex.test(email)) {
    userEmail.classList.remove("invalid");
    userEmail.classList.add("valid");
    console.log(userEmail.classList);
    message.classList.remove("active");
  } else {
    userEmail.classList.remove("valid");
    userEmail.classList.add("invalid");
    message.classList.add("active");
  }
}

// function validateEmail(email) {
//   var re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

//EVENTS
userEmail.addEventListener("keypress", validateEmail);
