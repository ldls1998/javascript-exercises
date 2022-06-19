const leapYears = function(año) {
    if (año % 100 == 0) {
        año /= 100
        return (año % 4 == 0) ? true: false;
    }
    return (año % 4 == 0) ? true: false;
};

// Do not edit below this line
module.exports = leapYears;
