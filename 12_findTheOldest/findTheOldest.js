const findTheOldest = function(people) {
    let oldest = people[0];
    people.filter(isOldest);
    function isOldest(person) {
        if (person.yearOfDeath === undefined) {
            const date = new Date();
            person.yearOfDeath = date.getFullYear();
        }
        if ((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            oldest = person;
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
