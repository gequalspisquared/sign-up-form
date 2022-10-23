const origPassword = document.querySelector('#password');
const confPassword = document.querySelector('#confirm');

function checkPasswordsMatch() {
    if (origPassword.value === confPassword.value) { return true; }
    return false;
}

function isEmpty() {
    if (origPassword.value === "" || confPassword.value === "") { return true; }
}

function makeInvalid() {
    const warning = document.querySelector('.error');

    if (checkPasswordsMatch() && !isEmpty()) {
        origPassword.setCustomValidity("");
        warning.textContent = "";
        confPassword.setCustomValidity("");
        return;
    }

    origPassword.setCustomValidity("Passwords do not match");
    warning.textContent = "* Passwords do not match";
    confPassword.setCustomValidity("Passwords do not match");
    return;
}

makeInvalid();

origPassword.addEventListener('focus', makeInvalid);
origPassword.addEventListener('keyup', makeInvalid);


confPassword.addEventListener('focus', makeInvalid);
confPassword.addEventListener('keyup', makeInvalid);