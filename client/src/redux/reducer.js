import {
    GET_RECIPES,
    GET_CUISINES,
    GET_RECIPE_DETAIL,
    GET_DIETS,
    GET_SORT,
    LOGIN,
    GET_SORT_CUISINE,
    GET_SORT_DIET,
    GET_SORT_SCORE,
} from './actions';

const initialState = {
    login: false,
    allRecipes: [],
    recipe: [],
    filteredRecipes: [],
    diets: [],
    cuisines: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acá va tu código:
        case GET_RECIPES:
            return {
                ...state,
                allRecipes: action.payload,
                filteredRecipes: action.payload,
            };
        case GET_CUISINES:
            return {
                ...state,
                cuisines: action.payload,
            };
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload,
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipe: action.payload,
            };
        case GET_SORT:
            const sort =
                action.payload === 'asc'
                    ? [...state.filteredRecipes].sort((a, b) => {
                          if (a.title > b.title) return 1;
                          if (a.title < b.title) return -1;
                          return 0;
                      })
                    : action.payload === 'desc'
                    ? [...state.filteredRecipes].sort((a, b) => {
                          if (a.title > b.title) return -1;
                          if (a.title < b.title) return 1;
                          return 0;
                      })
                    : [...state.allRecipes];
            return {
                ...state,
                filteredRecipes: sort,
            };

        case GET_SORT_SCORE:
            const sortScore =
                action.payload === 'asc'
                    ? [...state.filteredRecipes].sort(
                          (a, b) => a.healthScore - b.healthScore
                      )
                    : action.payload === 'desc'
                    ? [...state.filteredRecipes].sort(
                          (a, b) => b.healthScore - a.healthScore
                      )
                    : [...state.allRecipes];
            return {
                ...state,
                filteredRecipes: sortScore,
            };

        case GET_SORT_CUISINE:
            if (action.payload === 'All') {
                return {
                    ...state,
                    filteredRecipes: [...state.allRecipes],
                };
            }
            return {
                ...state,
                filteredRecipes: state.allRecipes.filter((recipe) =>
                    recipe.cuisines.includes(action.payload)
                ),
            };
        case GET_SORT_DIET:
            if (action.payload === 'All') {
                return {
                    ...state,
                    filteredRecipes: [...state.allRecipes],
                };
            }
            const filtered = [...state.allRecipes].filter((recipe) =>
                recipe.dietas.includes(action.payload)
            );
            return {
                ...state,
                filteredRecipes: filtered,
            };
        case LOGIN: {
            return {
                ...state,
                login: true,
            };
        }
        default:
            return state;
    }
};

export default rootReducer;
