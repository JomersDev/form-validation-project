//Global form variable
const form = document.getElementById("form");

//Form event listener
form.addEventListener('submit', function (event) {
    if (!email.validity.valid && !country.validity.valid && !postCode.validity.valid && !password.validity.valid && !passwordConfirm.validity.valid) {
        showEmailError();
        showCountryError();
        showPostCodeError();
        showPasswordError();
        showPasswordConfirmError();
        event.preventDefault();
    } else if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    } else if (!country.validity.valid) {
        showCountryError();
        event.preventDefault();
    } else if (!postCode.validity.valid) {
        showPostCodeError();
        event.preventDefault();
    } else if (!password.validity.valid) {
        showPasswordError();
        event.preventDefault();
    } else if (!passwordConfirm.validity.valid) {
        showPasswordConfirmError();
        event.preventDefault();
    } 
});

//Email validation
const email = document.getElementById("email");
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an valid e-mail address';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
    }
    emailError.className = 'error active';
}

//Country validation
const country = document.getElementById("country");
const countryError = document.querySelector('#country + span.error');

country.addEventListener('input', function (event) {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
});

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'Please enter your Country';
    } else if (country.validity.typeMismatch) {
        countryError.textContent = 'Entered value needs to be a Country';
    }
    countryError.className = 'error active';
}

//Post Code validation
const postCode = document.getElementById("postCode");
const postCodeError = document.querySelector('#postCode + span.error');

postCode.addEventListener('input', function (event) {
    if (postCode.validity.valid) {
        postCodeError.textContent = '';
        postCodeError.className = 'error';
    } else {
        showPostCodeError();
    }
});

function showPostCodeError() {
    if (postCode.validity.valueMissing) {
        postCodeError.textContent = 'Please enter your 4 digit Post Code ie 2000';
    } else if (postCode.validity.patternMismatch) {
        postCodeError.textContent = 'Please enter your 4 digit Post Code ie 2000';
    }
    postCodeError.className = 'error active';
}

//Password validation
const password = document.getElementById("password");
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', function (event) {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }
});

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'Please enter your password';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}`;
    }
    passwordError.className = 'error active';
}

//Password confirmation validation
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordConfirmError = document.querySelector('#passwordConfirm + span.error');

passwordConfirm.addEventListener('input', function (event) {
    if (passwordConfirm.validity.valid) {
        passwordConfirmError.textContent = '';
        passwordConfirmError.className = 'error';
    } else {
        showPasswordConfirmError();
    }
});

function showPasswordConfirmError() {
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = 'Please enter your password';
    } else if (passwordConfirm.validity.tooShort) {
        if (passwordConfirm.value !== password.value) {
            passwordConfirmError.textContent = 'Passwords must match';
        }
    }
    passwordConfirmError.className = 'error active';
}
