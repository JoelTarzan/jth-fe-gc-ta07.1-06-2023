// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const lengthOfArray = (array) => {
    console.log(array.length);
}

const randomElementOfArray = (array) => {
    randomNumber = Math.floor(Math.random() * array.length);
    console.log(array[randomNumber]);
}

lengthOfArray(array);
randomElementOfArray(array);