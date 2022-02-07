const fields = {};
const button = document.querySelector("button");

document.addEventListener("DOMContentLoaded", function () {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.subject = document.getElementById('subject');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
};

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
};

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
};

function isValid() {
    let valid = true;
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.question, isNotEmpty);
    return valid;
};

class User {
    constructor(name, email, subject, question) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.question = question;
    }
};

function sendContact() {
    if (isValid()) {
        alert("We received your question")
    } else {
        alert("There was an error");
    }
}

button.addEventListener("click", sendContact);