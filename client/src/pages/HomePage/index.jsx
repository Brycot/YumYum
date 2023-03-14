import React from 'react';
import { useSelector } from 'react-redux';
import { Filters, RecipesContainer, Pagination } from '../../components';
import { usePagination } from '../../hooks';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const filteredRecipes = useSelector((state) => state.filteredRecipes);
    const { currentPage, nextPage, previousPage, maxPages, itemsPerPage } =
        usePagination(10, filteredRecipes);

    return (
        <main>
            <h1>YumYum</h1>
            <Filters />

            <RecipesContainer
                filteredRecipes={filteredRecipes}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
            <Pagination
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxPages={maxPages}
            />
        </main>
    );
};
