const removeFromArray = function() {
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i];
        const index = arguments[0].indexOf(element);
        if (index > -1) {
            arguments[0].splice(index, 1); // 2nd parameter means remove one item only
          }
    }
    return arguments[0]
};

// Do not edit below this line
module.exports = removeFromArray;
