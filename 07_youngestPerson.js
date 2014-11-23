'use strict';

function findYoungestPerson(persons) {
    var minAge = Number.MAX_VALUE;
    var youngest;
    for (var i = 0; i < persons.length; i++) {
        if (minAge > persons[i].age) {
            minAge = persons[i].age;
            youngest = persons[i];
        }
    }
    //return youngest;
    console.log('The youngest person is ' + youngest.firstname + ' ' + youngest.lastname);
}



var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);