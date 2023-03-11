const { Recipe } = require('../db');
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

module.exports = {
    saveApiRecipesToDb,
};
