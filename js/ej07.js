// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const biggersThanFive = (array) => {

    array.forEach((num) => {
        if (num > 5) {
            console.log(num);
        }
    });
}

biggersThanFive(array);