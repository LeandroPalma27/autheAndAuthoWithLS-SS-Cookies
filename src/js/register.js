import '../css/register.css';
import { inputIsFull, inputPassIsFull } from './functionalities/inputs-rules';
import { createAccount } from './functionalities/register/register-account';
import { changeTypePassword } from './effects/view-password';
import '@fortawesome/fontawesome-free/js/all';

if (sessionStorage.length > 0) {
    window.location.href = `${window.location.protocol}//${window.location.host}/autheAndAuthoWithLS-SS-Cookies/resources/main.html`;
}

// Botones:
const btnBackToLogin = document.getElementById('btnBackToLogin');
const btnCreateAccount = document.getElementById('btnCreateAccount');
const openPassword = document.querySelector('.open');
const closePassword = document.querySelector('.close');

// Inputs:
const user = document.getElementById('username');
const password = document.getElementById('password');

// Eventos:
btnBackToLogin.addEventListener('click', () => {
    window.location.href = `${window.location.protocol}//${window.location.host}/autheAndAuthoWithLS-SS-Cookies/`;
});
btnCreateAccount.addEventListener('click', () => {
    if (user.value == '' && password.value == '') {
        alert('¡Llene los campos!');
    } else {
        if (inputIsFull(user) && inputPassIsFull(password)) {
            /* console.log('xd');
            const validar = esacaparHtml(user, password); */
            /* if ( validar == true )  */createAccount(user.value, password.value);
            // TODO: Crear funcionalidad que escape caracteres de html (investigar alguna libreria).
        } else if (inputIsFull(user) == false) {
            alert('Ingrese un username valido');
        } else if (inputPassIsFull(user) == false) {
            alert('La contraseña debe tener mas de 4 caracteres, tener una mayuscula y tambien 1 numero.');
        }
    }
});
openPassword.addEventListener('click', () => {
    openPassword.classList.toggle('active');
    closePassword.classList.toggle('active');
    changeTypePassword(password);
});
closePassword.addEventListener('click', () => {
    openPassword.classList.toggle('active');
    closePassword.classList.toggle('active');
    changeTypePassword(password);
});

// Para evitar inyecciones de js por los inputs:
user.maxLength = 50;
password.maxLength = 100;

// Para escapar caracteres de html:










