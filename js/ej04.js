// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let name = 'Joel';
let nameArray = name.split('');
let copyArray = nameArray.slice();
let invertedArray = copyArray.reverse();
let invertedName = invertedArray.join('');

console.log(name);
console.log(nameArray);
console.log(invertedArray);
console.log(invertedName);