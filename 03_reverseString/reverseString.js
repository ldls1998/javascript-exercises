const reverseString = function(cadena) {
    let myArray = cadena.split("");
    for (let index = 0; index < myArray.length / 2; index++) {
        const aux = myArray[index];
        myArray[index] = myArray[myArray.length - 1 - index];
        myArray[myArray.length - 1 - index] = aux;
    }
    return myArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
