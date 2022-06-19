const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }

    if (num1 > num2) {
        var max = num1;
        var min = num2;
    } else {
        var max = num2;
        var min = num1;
    }
    let suma = 0;
    for (let i = min; i <= max; i++) {
        suma += i;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
