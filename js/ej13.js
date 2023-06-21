// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.

let Recipe = {
    "name": "Maccarones al pesto",
    "timeInMinutes": 45,
    "ingredients": ['macarrones', 'queso de cabra', 'aceite', 'albahaca', 'nueces', 'leche', 'ajo', 'sal']
}

const recipeInParts = (recipe) => {

    const { name, timeInMinutes, ingredients } = recipe;

    console.log('Name: ' + name);
    console.log('Time In Minutes: ' + timeInMinutes);
    console.log('Ingredients: ' + ingredients);
}

recipeInParts(Recipe);