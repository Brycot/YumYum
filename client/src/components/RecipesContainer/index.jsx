import React from 'react';
import { useSelector } from 'react-redux';
import { ItemRecipe } from '../ItemRecipe';

import styled from './RecipesContainer.module.css';

export const RecipesContainer = ({ filteredRecipes, currentPage, itemsPerPage }) => {

    return (
        <section className={styled.container}>
            {filteredRecipes &&
                filteredRecipes
                    .slice(
                        (currentPage - 1) * itemsPerPage,
                        (currentPage - 1) * itemsPerPage + itemsPerPage
                    )
                    .map((recipe) => (
                        <ItemRecipe
                            key={recipe.id}
                            id={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            cheap={recipe.cheap}
                            servings={recipe.servings}
                        />
                    ))}
        </section>
    );
};
