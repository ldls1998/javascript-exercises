const fibonacci = function (numero) {
    if (typeof numero === 'string') {
        numero = parseInt(numero);
    }
    if (numero < 0) {
        return "OOPS";
    }
    if (numero === 0) {
        return 0;
    }
    if (numero === 1) {
        return 1;
    }
    if (numero === 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    for (let index = 0; index < numero - 2; index++) {
        var c = a + b;
        a = b;
        b = c;
    };
    return c;
}

// Do not edit below this line
module.exports = fibonacci;
