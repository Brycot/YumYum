// Aca deben declarar las variables donde tengan el action types.
export const GET_RECIPES = 'GET_RECIPES';
export const GET_CUISINES = 'GET_CUISINES';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const GET_DIETS = 'GET_DIETS';
export const LOGIN = 'LOGIN';
export const GET_SORT = 'GET_SORT';
export const GET_SORT_CUISINE = 'GET_SORT_CUISINE';
export const GET_SORT_DIET = 'GET_SORT_DIET';
export const GET_SORT_SCORE = 'GET_SORT_SCORE';

export const getAllRecipes = () => async (dispatch) => {
    const resp = await fetch('http://localhost:3001/recipes');
    const data = await resp.json();
    dispatch({ type: GET_RECIPES, payload: data });
};
export const getAllCuisines = () => async (dispatch) => {
    const resp = await fetch('http://localhost:3001/cuisines');
    const data = await resp.json();
    dispatch({ type: GET_CUISINES, payload: data });
};
export const getAllDiets = () => async (dispatch) => {
    const resp = await fetch('http://localhost:3001/diets');
    const data = await resp.json();
    dispatch({ type: GET_DIETS, payload: data });
};

export const getRecipeDetail = (id) => async (dispatch) => {
    const resp = await fetch(`http://localhost:3001/recipes/${id}`);
    const data = await resp.json();
    dispatch({ type: GET_RECIPE_DETAIL, payload: data });
};

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

// export const createCharacter = (data) => {
//     return {
//         type: CREATE_CHARACTER,
//         payload: {
//             ...data,
//             id: id++,
//         },
//     };
// };

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
// export const deleteCharacter = (id) => {
//     return {
//         type: DELETE_CHARACTER,
//         payload: id,
//     };
// };
