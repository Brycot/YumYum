import axios from 'axios';

// Aca deben declarar las variables donde tengan el action types.
export const GET_RECIPES = 'GET_RECIPES';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_CUISINES = 'GET_CUISINES';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const GET_DIETS = 'GET_DIETS';
export const LOGIN = 'LOGIN';
export const GET_SORT = 'GET_SORT';
export const GET_SORT_CUISINE = 'GET_SORT_CUISINE';
export const GET_SORT_DIET = 'GET_SORT_DIET';
export const GET_SORT_SCORE = 'GET_SORT_SCORE';
export const DELETE_FILTERS = 'DELETE_FILTERS';
export const IS_LOADING = 'IS_LOADING';
export const TOGGLE_CREATE = 'TOGGLE_CREATE';
export const TOGGLE_ERROR = 'TOGGLE_CREATE';

// actions gets
export const getAllRecipes = () => async (dispatch) => {
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
export const deleteFilters = () => (dispatch) => {
    dispatch({ type: DELETE_FILTERS });
};

export const createRecipe = (recipe) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    const response = await axios.post('http://localhost:3001/recipes', recipe);
    if (response.status !== 201) {
        dispatch({ type: TOGGLE_ERROR, payload: 'No se creo la receta' });
    }
    dispatch({ type: CREATE_RECIPE, payload: recipe });
};
