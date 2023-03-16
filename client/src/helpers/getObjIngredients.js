export const getObjIngredients = (ingredientList) => {
    const myingredients = ingredientList.split(',');
    return myingredients.map((ingredient) => {
        return { name: ingredient };
    });
};
