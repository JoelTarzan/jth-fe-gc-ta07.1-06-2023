// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades

let Persona = {
    "nombre": "Joel",
    "apellidos": "Tarzán Hernández",
    "edad": 22,
    "ciudad": "Vila-Seca",
    "pais": "España"
}

const { nombre, apellidos, edad} = Persona;

console.log(nombre);
console.log(apellidos);
console.log(edad);