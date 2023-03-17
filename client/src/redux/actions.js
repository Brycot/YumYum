import axios from 'axios';
import {
    CREATE_RECIPE,
    DELETE_FILTERS,
    GET_CUISINES,
    GET_DIETS,
    GET_RECIPES,
    GET_RECIPE_DETAIL,
    GET_SORT,
    GET_SORT_CUISINE,
    GET_SORT_DIET,
    GET_SORT_SCORE,
    IS_LOADING,
    TOGGLE_ERROR,
    SEARCH_RECIPE,
    GET_SORT_FROM
} from './actions-types';

// Aca deben declarar las variables donde tengan el action types.

// actions gets
export const getAllRecipes = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    const { data } = await axios('http://localhost:3001/recipes');
    dispatch({ type: GET_RECIPES, payload: data });
};
export const getAllCuisines = () => async (dispatch) => {
    const { data } = await axios('http://localhost:3001/cuisines');
    dispatch({ type: GET_CUISINES, payload: data });
};
export const getAllDiets = () => async (dispatch) => {
    const { data } = await axios('http://localhost:3001/diets');
    dispatch({ type: GET_DIETS, payload: data });
};
export const getRecipeDetail = (id) => async (dispatch) => {
    const { data } = await axios(`http://localhost:3001/recipes/${id}`);
    dispatch({ type: GET_RECIPE_DETAIL, payload: data });
};

// actions filters
export const sortByName = (data) => (dispatch) => {
    dispatch({ type: GET_SORT, payload: data });
};
export const sortByCuisine = (data) => (dispatch) => {
    dispatch({ type: GET_SORT_CUISINE, payload: data });
};
export const sortByDiet = (data) => (dispatch) => {
    dispatch({ type: GET_SORT_DIET, payload: data });
};
export const sortByScore = (data) => (dispatch) => {
    dispatch({ type: GET_SORT_SCORE, payload: data });
};
export const sortByCreated = (data) => (dispatch) => {
    dispatch({ type: GET_SORT_FROM, payload: data });
};
export const deleteFilters = () => (dispatch) => {
    dispatch({ type: DELETE_FILTERS });
};

export const createRecipe = (recipe, stepsObj) => async (dispatch) => {
    const steps = Object.values(stepsObj);
    dispatch({ type: IS_LOADING });
    const response = await axios.post('http://localhost:3001/recipes', {
        ...recipe,
        steps,
    });
    if (response.status !== 201) {
        dispatch({ type: TOGGLE_ERROR, payload: 'No se creo la receta' });
    }
    dispatch({ type: CREATE_RECIPE, payload: recipe });
};

export const searchRecipe = (recipe) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    const { data } = await axios(
        `http://localhost:3001/recipes?name=${recipe}`
    );
    dispatch({ type: SEARCH_RECIPE, payload: data });
};
