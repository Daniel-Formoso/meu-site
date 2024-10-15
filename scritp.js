function typeWriter(elemento, callback) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
            if (i === textoArray.length - 1) {
                setTimeout(callback, 10);
            }
        }, 75 * i);
    });
}

const fraseOi = document.querySelector('p');
const frasePrincipal = document.querySelector('h2');
const fraseSecundaria = document.querySelector('h3');

typeWriter(fraseOi, () => {
    typeWriter(frasePrincipal, () => {
        typeWriter(fraseSecundaria);
    });
});