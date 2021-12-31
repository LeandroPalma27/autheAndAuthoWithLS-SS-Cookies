
// Para verificar si los inputs cumplen con lo requerido:
export const inputIsFull = ( htmlElement ) => {
    if (htmlElement.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

export const inputPassIsFull = ( htmlElement ) => {
    if (htmlElement.value.length > 3) {
        return correctPassPattern(htmlElement.value);
    } else {
        return false;
    }
}

const correctPassPattern = ( value ) => {
    const contenido = value.split('');
    if ( passContentUpper(contenido) && passContentNumbers(contenido)) {
        return true;
    } else {
        return false;
    }
}

const passContentUpper = ( caracteres ) => {
    const aloneStringCharacters = caracteres.filter((e) => {
        if (isNaN(parseInt(e, 10))) {
            return e;
        }
    });
    const results = aloneStringCharacters.map((e) => {
        if (e == e.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    });
    return results.includes(true);
}

const passContentNumbers = ( caracteres ) => {
    const results = caracteres.map((e) => {
        if ((e/1) == parseInt(e, 10)) {
            return true;
        } else {
            return false;
        }
    });
    return results.includes(true);
}
