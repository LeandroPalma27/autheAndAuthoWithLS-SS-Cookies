

export const createAccount = (user, pass) => {

    if (userExists(user)) {
        alert('El nombre de usuario ya existe en el sistema.');
    } else {
        localStorage.setItem(user, JSON.stringify({
            username: user,
            password: pass
        }));
        alert('Cuenta creada.');
        window.location.href = `${window.location.protocol}//${window.location.host}/`;
    }

}

const userExists = (user) => {
    const existencia = localStorage.getItem(user);
    if (existencia == null) {
        return false;
    } else {
        return true;
    }
}