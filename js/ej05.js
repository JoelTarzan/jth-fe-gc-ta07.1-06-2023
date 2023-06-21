// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const intercalarArrays = (arrayUno, arrayDos) => {
    
    arrayTres = [];
    length = arrayUno.length;

    for (let i = 0; i < length; i++) {
        arrayTres.push(arrayUno[0]);
        arrayTres.push(arrayDos[0]);

        arrayUno.shift();
        arrayDos.shift();
    }

    return arrayTres;
}

console.log(intercalarArrays(arrayUno, arrayDos));
console.log(arrayUno);
console.log(arrayDos);