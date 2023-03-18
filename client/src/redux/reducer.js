import {
    GET_RECIPES,
    GET_CUISINES,
    GET_RECIPE_DETAIL,
    GET_DIETS,
    GET_SORT,
    GET_SORT_CUISINE,
    GET_SORT_DIET,
    GET_SORT_SCORE,
    DELETE_FILTERS,
    TOGGLE_CREATE,
    IS_LOADING,
    CREATE_RECIPE,
    CLOSE_MODAL,
    SEARCH_RECIPE,
    GET_SORT_FROM,
} from './actions-types';

const initialState = {
    allRecipes: [],
    recipe: [],
    filteredRecipes: [],
    diets: [],
    cuisines: [],
    onCreate: false,
    onLoading: true,
    onError: '',
    created: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acá va tu código:
        case GET_RECIPES:
            return {
                ...state,
                onLoading: false,
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
                onLoading: false,
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
                          (a, b) => b.healthScore - a.healthScore
                      )
                    : action.payload === 'desc'
                    ? [...state.filteredRecipes].sort(
                          (a, b) => a.healthScore - b.healthScore
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

        case GET_SORT_FROM:
            if (action.payload === 'All') {
                return {
                    ...state,
                    filteredRecipes: [...state.allRecipes],
                };
            }
            const filterFrom =
                action.payload === 'db'
                    ? [...state.allRecipes].filter((recipe) => recipe.db)
                    : action.payload === 'api'
                    ? [...state.allRecipes].filter((recipe) => !recipe.db)
                    : [...state.allRecipes];
            return {
                ...state,
                filteredRecipes: filterFrom,
            };

        case DELETE_FILTERS:
            return {
                ...state,
                filteredRecipes: state.allRecipes,
            };
        case TOGGLE_CREATE:
            return {
                ...state,
                onCreate: !state.onCreate,
            };
        case IS_LOADING:
            return {
                ...state,
                onLoading: true,
            };
        case CREATE_RECIPE:
            return {
                ...state,
                onLoading: false,
                created: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                onError: '',
                created: false,
            };
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload,
                onLoading: false,
            };
        default:
            return state;
    }
};

export default rootReducer;
