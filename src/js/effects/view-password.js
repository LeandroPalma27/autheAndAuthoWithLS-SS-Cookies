export const changeTypePassword = ( htmlElement ) => {
    if (htmlElement.type == 'text') {
        htmlElement.type = 'password';
    } else if (htmlElement.type == 'password') {
        htmlElement.type = 'text';
    }
}
