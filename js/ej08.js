// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.

const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
const javascript2 = ["Objetos", "Arrays", "ParseInt"];

const findSameWords = (array1, array2) => {

    array1.forEach((word) => {

        if (array2.includes(word)) {
            console.log(word);
        }

    });
}

findSameWords(javascript1, javascript2);