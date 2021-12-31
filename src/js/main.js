import '../css/main.css';

// Para comprobar si hay una sesion activa valida:
if (sessionStorage.length == 0) {
    window.location.href = `${window.location.protocol}//${window.location.host}/autheAndAuthoWithLS-SS-Cookies/`;
}

// Buttons:
const btnCerrarSesion = document.getElementById('btnCerrarSesion');

// Info:
const tituloName = document.querySelector('.user-info');

// Obtencion de cookies:
const cookies = document.cookie;

btnCerrarSesion.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = `${window.location.protocol}//${window.location.host}/autheAndAuthoWithLS-SS-Cookies/`;
});

// Para realizar la lectura de las cookies:
const readCookiesUser = ( cookies ) => {
    const contentCookie = cookies.split('; ');
    const dataUser = contentCookie.map(( data ) => {
        const userDataArray = data.split('=');
        return userDataArray[1];
    });
    const jsonDataUser = dataUser.map(( data ) => {
        return JSON.parse(data);
    });
    return jsonDataUser;
}

// Para la obtencion de la informacion de los usuarios en las cookies:
const jsonDataUserCookies = readCookiesUser(cookies);

// Para la validacion de las cookies con la sesion activa:
const validateCookieWithSession = ( dataUsers ) => {
    dataUsers.forEach((e) => {
        const username = e.username;
        if (!(sessionStorage.getItem(username) == null)) concatTitleUser(username);
    });
}

// Para concatenar el username en el titulo:
const concatTitleUser = ( user ) => {
    tituloName.innerHTML = user;
}

validateCookieWithSession(jsonDataUserCookies);



