// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array.

let Recipe = {
    "name": "Maccarones al pesto",
    "timeInMinutes": 45,
    "ingredients": ['macarrones', 'queso de cabra', 'aceite', 'albahaca', 'nueces', 'leche', 'ajo', 'sal']
}

let recipes = [
    {
        "name": "Salmón con miel, curry y arroz",
        "timeInMinutes": 22,
        "ingredients": ['arroz', 'lomo de salmón', 'miel', 'curry', 'agua', 'sal', 'pimienta', 'zumo de limón', 'hojas de espinaca']
    },
    {
        "name": "Pizza Prosciutto",
        "timeInMinutes": 30,
        "ingredients": ['mozarella', 'jamón york', 'salsa de tomate', 'orégano', 'masa de pizza']
    },
];

recipes.push(Recipe);

const recipeInParts = (recipe) => {

    const { name, timeInMinutes, ingredients } = recipe;

    console.log('Name: ' + name);
    console.log('Time In Minutes: ' + timeInMinutes);
    console.log('Ingredients: ' + ingredients);
}

const viewAllRecipes = (recipes) => {
    recipes.forEach(recipeInParts);
}

viewAllRecipes(recipes);