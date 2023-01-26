const formAnswer =  document.querySelector("#rating-form");
const rateDisplay = document.querySelector("#submit-rate");
const resultDisplay = document.querySelector("#show-rate");
const usersRate = document.querySelector("#users-rate");


function runCode(e){
    const rateValue =  document.querySelector('input[name=rating]:checked');
    usersRate.textContent = rateValue.value;
    rateDisplay.style.display = "none";
    resultDisplay.style.display = "flex";
    e.preventDefault();
}