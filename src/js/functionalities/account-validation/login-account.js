

export const authenticateAccount = ( user, pass ) => {
    if (!(localStorage.getItem(user) == null)) {
        validateAccount(user, pass, localStorage.getItem(user));
    } else {
        alert('La contraseña es incorrecta o el username es incorrecto.');
    }
}

const validateAccount = (user, pass, item ) => {
    const jsonData = JSON.parse(item);
    if (jsonData.password == pass) {
        alert('Logueo valido.');
        createSession(user);
        createCookie(user, pass);
        window.location.href = `${window.location.protocol}//${window.location.host}/resources/main.html`;
    } else {
        alert('La contraseña es incorrecta o el username es incorrecto.');
    }
}

const createSession = ( user ) => {
    if ( user == 'administrador' ) sessionStorage.setItem( user, 'admin' );
    else sessionStorage.setItem( user, 'user' );
}

const createCookie = ( user, pass ) => {
    const nameCookie = `userCookie.${user}`;
    const dataUser = {
        username: user,
        password: pass
    }
    const jsonCookie = JSON.stringify( dataUser );
    document.cookie = `${nameCookie}=${jsonCookie}`;
}