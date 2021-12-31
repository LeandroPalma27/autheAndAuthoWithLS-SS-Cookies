import '@fortawesome/fontawesome-free/js/all';
import { changeTypePassword } from './effects/view-password';
import { authenticateAccount } from './functionalities/account-validation/login-account';

// Para validar si existe una sesion activa:
if (sessionStorage.length > 0) {
    window.location.href = `${window.location.protocol}//${window.location.host}/resources/main.html`;
}

// Buttons:
const createAccount = document.getElementById('btnCrearCuenta');
const btnIngresar = document.getElementById('btnIngresar');
const openPassword = document.querySelector('.open');
const closePassword = document.querySelector('.close');

// Inputs: 
const user = document.getElementById('username');
const password = document.getElementById('password');

// Eventos:
createAccount.addEventListener('click', () => {
    window.location.href = `${window.location.protocol}//${window.location.host}/resources/register.html`;
});
btnIngresar.addEventListener('click', () => {
    if (user.value == '' && password.value == '') {
        alert('¡Llene los campos!');
    } else if (user.value == '') {
        alert('Rellene el campo username');
    } else if (password.value == '') {
        alert('Rellene el campo password');
    } else {
        authenticateAccount(user.value, password.value);
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