// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divideInTwoArrays = (array) => {

    arrayPair = array.filter((num) => {
        return num % 2 == 0;
    });

    arrayOdd = array.filter((num) => {
        return num % 2 != 0;
    });

    return [arrayPair, arrayOdd];
}

console.log(divideInTwoArrays(array));