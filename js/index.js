// Init Variables

const buttonClick = document.querySelector("#send");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");
const inputMessage = document.querySelector(".message");
const feedbackName = document.querySelector(".feedback-name");
const feedbackEmail = document.querySelector(".feedback-email");
const feedbackPhone = document.querySelector(".feedback-phone");
const feedbackMessage = document.querySelector(".feedback-message");
const regEmail = /.....@.../;
const regPhone1 = /\+9613\d{6}$/;
const regPhone2 = /\+9617\d{7}$/;

// Functions

function validateInputFields () {
    var checker = 4;

    if (inputName.value.length > 4) {
        feedbackName.textContent = "";
        checker -= 1;
    } else {
        feedbackName.textContent = "Name too short!";
    };

    if (inputEmail.value.match(regEmail)) {
        feedbackEmail.textContent = "";
        checker -= 1;
    } else {
        feedbackEmail.textContent = "Invalid email!";
    };

    if (inputPhone.value.match(regPhone1) || inputPhone.value.match(regPhone2)) {
        feedbackPhone.textContent = "";
        checker -= 1;
    } else {
        feedbackPhone.textContent = "Invalid phone number!";
    };

    if (inputMessage.value.length > 99) {
        feedbackMessage.textContent = "";
        checker -= 1;
    } else {
        feedbackMessage.textContent = "Message too short!";
    };

    if (checker === 0) { //Reset fields if all success
        inputName.value = "";
        inputEmail.value = "";
        inputPhone.value = "";
        inputMessage.value = "";
    };
};

// Script

buttonClick.addEventListener("click", validateInputFields);
