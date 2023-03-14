const { Recipe, Diet, Cuisine } = require('../db');
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
            diets,
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
                dietas: diets,
            });
        }
    );
    await Promise.all(recipesPms);
};

const saveDietsToDb = async () => {
    const newDiets = [
        'gluten free',
        'dairy free',
        'ketogenic',
        'vegetarian',
        'lacto-vegetarian',
        'ovo-vegetarian',
        'lacto ovo vegetarian',
        'vegan',
        'pescatarian',
        'paleo',
        'primal',
        'low fodmap',
        'whole 30',
    ];
    const dietsPms = newDiets.map((d) => {
        return Diet.create({ name: d });
    });
    await Promise.all(dietsPms);
};

const saveCuisinesToDb = async () => {
    const newCuisines = [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietname',
    ];
    const cuisinesPms = newCuisines.map((d) => {
        return Cuisine.create({ name: d });
    });
    await Promise.all(cuisinesPms);
};
module.exports = {
    saveApiRecipesToDb,
    saveDietsToDb,
    saveCuisinesToDb,
};
