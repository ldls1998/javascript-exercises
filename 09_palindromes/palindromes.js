const palindromes = function (cadena) {
    punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    cadena = cadena.replaceAll(" ", "");
    const letras = cadena.split("");
    var soloLetras = letras.filter(letra => punctuation.indexOf(letra) === -1);
    soloLetras = soloLetras.join("");
    soloLetras = soloLetras.toLowerCase();
    for (let index = 0; index < (soloLetras.length / 2); index++) {
        if (soloLetras[index] != soloLetras[soloLetras.length - index - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
