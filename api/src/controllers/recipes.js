const { response, request } = require('express');
const { getInfo, getInfoById } = require('../helpers/getInfo');
const { Recipe } = require('../db');

const recipesGet = async (req = request, res = response) => {
    try {
        const recipes = await getInfo();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const recipesGetbyId = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const recipe = await getInfoById(id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const recipesPost = async (req = request, res = response) => {
    const {
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
        steps,
    } = req.body;
    try {
        const recipe = await Recipe.create({
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
            steps,
        });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    recipesGet,
    recipesGetbyId,
    recipesPost,
};
