// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.

class Recipe {

    name;
    timeInMinutes;
    ingredients;

    constructor(name, timeInMinutes, ingredients) {
        this.name = name;
        this.timeInMinutes = timeInMinutes;
        this.ingredients = ingredients;
    }
}

const recipe1 = new Recipe("Maccarones al pesto", 45, ['macarrones', 'queso de cabra', 'aceite', 'albahaca', 'nueces', 'leche', 'ajo', 'sal']);
const recipe2 = new Recipe("Salmón con miel, curry y arroz", 22, ['arroz', 'lomo de salmón', 'miel', 'curry', 'agua', 'sal', 'pimienta', 'zumo de limón', 'hojas de espinaca']);
const recipe3 = new Recipe("Pizza Prosciutto", 30, ['mozarella', 'jamón york', 'salsa de tomate', 'orégano', 'masa de pizza']);

const recipes = [recipe1, recipe2, recipe3];

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