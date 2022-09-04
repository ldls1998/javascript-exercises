const findTheOldest = function (people) {
    const fix = people.map(person => {
        if (!person.yearOfDeath) 
            return person.yearOfDeath = new Date().getFullYear();
    });
    const oldest = people.sort((a, b) => {
        const ultimo = a.yearOfDeath - a.yearOfBirth;
        const siguiente = b.yearOfDeath - b.yearOfBirth;
        return ultimo > siguiente ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
