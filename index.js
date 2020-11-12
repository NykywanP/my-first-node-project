const { add, subtract} = require("./myMododule");

let name = 'Nykywan Parker';
console.log(name);

function printName(person) {
    return `Hello, ${person}`;
}
console.log(printName(name));


console.log(add(5, 50));
console.log(subtract(10, 20));