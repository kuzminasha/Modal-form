let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];
const submit = document.getElementById('submit');
const form = document.getElementById('form');
let email = document.getElementById('email')

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function show() {
    const btn = document.querySelector('.password_btn')
    const input = document.querySelector('.password_input')

    btn.addEventListener('pointerdown', () => {
        btn.classList.toggle('active');
        input.setAttribute('type', 'text');
    })
    btn.addEventListener('pointerup', () => {
        btn.classList.toggle('active');
        input.setAttribute('type', 'password');
    })
}
show()

function error() {
    email.addEventListener('blur', () => {
        if (email.validity.valueMissing)
            showErr(email, "You need to enter an email address")
        else if (email.validity.typeMismatch)
            showErr(email, "Entered value needs to be an email address")
    });
}
error()

function showErr(field, errText) {
    field.classList.add('field-err')
    document.getElementById('error_text').innerHTML = errText;

    hideErr(field)
}

function hideErr(field) {
    field.addEventListener('input', () => {
        field.classList.remove('field-err');
        document.getElementById('error_text').innerHTML = '';
    })
}

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Entered value needs to be an email address.");
    } else if (email.validity.valueMissing) {
        email.setCustomValidity("You need to enter an email address.");
    } else {
        email.setCustomValidity("");
    }
});

function retriveFormValue(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
    modal.style.display = 'none';
}
form.addEventListener('submit', retriveFormValue)