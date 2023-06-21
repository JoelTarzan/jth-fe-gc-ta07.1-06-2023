// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.

let pets = [
    {
        "name": "Max",
        "type": "perro",
        "age": 12
    },
    {
        "name": "Kiara",
        "type": "perro",
        "age": 13
    },
    {
        "name": "Kiko",
        "type": "perro",
        "age": 13
    },
    {
        "name": "Triana",
        "type": "dragón barbudo",
        "age": 4
    },
];

const nameOfPets = (pets) => {
    pets.forEach((pet) => {
        console.log(pet.name);
    });
}

nameOfPets(pets);