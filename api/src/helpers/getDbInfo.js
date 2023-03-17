const { Op } = require('sequelize');
const { Recipe, Diet } = require('../db');

const getRecipesDb = async () => {
    const recipes = await Recipe.findAll({
        include: {
            model: Diet,
            through: {
                attributes: [],
            },
        },
    });
    return recipes;
};
const getRecipesDbById = async (id) => {
    if (!id) throw new Error(`The id is required`);

    const recipe = await Recipe.findByPk(id, {
        include: {
            model: Diet,
        },
        through: {
            attributes: [],
        },
    });
    if (!recipe) throw new Error(`Does not exist a recipe with id: ${id}`);

    return recipe;
};

const getRecipeDbByName = async (name) => {
    const recipe = await Recipe.findAll(
        {
            where: {
                title: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        },
        {
            include: {
                model: Diet,
            },
            through: {
                attributes: [],
            },
        }
    );
    if (!recipe) throw new Error(`Does not exist recipes with name: ${name}`);
    return recipe;
};

module.exports = {
    getRecipesDb,
    getRecipesDbById,
    getRecipeDbByName,
};
