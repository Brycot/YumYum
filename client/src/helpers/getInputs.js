export const getInputs = (
    pricePerServing,
    readyInMinutes,
    servings,
    healthScore,
    title,
    image,
    summary,
    pricePerServingValid,
    readyInMinutesValid,
    servingsValid,
    healthScoreValid,
    titleValid,
    imageValid,
    summaryValid
) => {
    const inputs = [
        {
            title: 'Name of Recipe',
            type: 'text',
            placeholder: 'Bistek',
            value: title,
            errorMessage: titleValid,
        },
        {
            title: 'Sumary',
            type: 'text',
            placeholder: 'Delicius bistek',
            value: summary,
            errorMessage: summaryValid,
        },
        {
            title: 'Image Url',
            type: 'text',
            placeholder: 'https://.....',
            value: image,
            errorMessage: imageValid,
        },
        {
            title: 'Time of preparation',
            type: 'number',
            placeholder: '23 Minutes',
            value: readyInMinutes,
            errorMessage: readyInMinutesValid,
        },
        {
            title: 'Serving',
            type: 'number',
            placeholder: '4',
            value: servings,
            errorMessage: servingsValid,
        },
        {
            title: 'Price per servings',
            type: 'number',
            placeholder: '$23.4',
            value: pricePerServing,
            errorMessage: pricePerServingValid,
        },
        {
            title: 'Health Score',
            type: 'text',
            placeholder: '4',
            value: healthScore,
            errorMessage: healthScoreValid,
        },
    ];
    return inputs;
};
