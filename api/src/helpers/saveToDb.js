const { Recipe, Diet } = require('../db');
const { recipes } = require('../utils/data');

const saveApiRecipesToDb = async () => {
    const recipesPms = recipes.results.map(
        ({
            id,
            glutenFree,
            cheap,
            lowFodmap,
            pricePerServing,
            readyInMinutes,
            servings,
            healthScore,
            title,
            image,
            summary,
            cuisines,
            dishTypes,
            analyzedInstructions,
        }) => {
            return Recipe.create({
                id,
                glutenFree,
                cheap,
                lowFodmap,
                pricePerServing,
                readyInMinutes,
                servings,
                healthScore,
                title,
                image,
                summary,
                cuisines,
                dishTypes,
                steps: analyzedInstructions[0]?.steps,
            });
        }
    );
    await Promise.all(recipesPms);
};

const saveDietsToDb = async () => {
    const newDiets = [
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto-Vegetarian',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
        'Paleo',
        'Primal',
        'Low',
        'FODMAP',
        'Whole30',
    ];
    const dietsPms = newDiets.map((d) => {
        return Diet.create({ name: d });
    });
    await Promise.all(dietsPms);
};
module.exports = {
    saveApiRecipesToDb,
    saveDietsToDb,
};
