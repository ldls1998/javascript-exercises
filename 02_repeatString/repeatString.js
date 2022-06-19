const repeatString = function(frase, num_repeticiones) {
    if (num_repeticiones < 0) {
        return "ERROR";
    }
    rpta = ``
    for (let i = 0; i < num_repeticiones; i++) {
        rpta += frase;     
    }
    return rpta;
};

// Do not edit below this line
module.exports = repeatString;
