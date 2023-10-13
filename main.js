// Declaration
var item = 4;
(() => {
    //Undefined because in this block, the item hasn't been set
    //console.log(item === undefined); 
    var item = 3;
    // we get 3 here because of scope
    //console.log(item); 
})();
// we get 4 here because of global scope
//console.log(item);

// Array with an empty slot
const names = ['ben',, 'sue', 'reed'];
// map skips empty index in an array
// names.map(n => console.log(n));
// But when we check the number of names in the array, all of the indexes are counted
// console.log('number of names: ', names.length)
// We get undefined here
// console.log('give me second item from array: ', names[1])

// Array with trailing comma
const fruit = ['apple', 'orange', 'banana', ];
// Unlike with the array that has an empty slot between indexes, we get the number of fruit in the array.
// the trailing comma gets ignored
// console.log('number of fruit: ', fruit.length);
// console.log('number of fruit: ', fruit[3]);
// We'd have to be specific if we want to have an empty slot
const heroesA = ['spider-man', 'super-man', 'invinsible', undefined];
const heroesB = ['spider-man', 'super-man', 'invinsible', /* nothing */,];
console.log('number of heroes a: ', heroesA.length);
console.log('number of heroes b: ', heroesB.length);
