import React from 'react';

export const ItemRecipe = ({ id, image, title, cheap, servings }) => {
    return (
        <div key={id}>
            <img src={image} alt="" />
            <p>{title}</p>
            {cheap && <p>cheap</p>}
            <p>Serving: {servings}</p>
        </div>
    );
};
