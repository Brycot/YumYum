import React from 'react';
import { useSelector } from 'react-redux';
import { Filters, RecipesContainer, Pagination } from '../../components';
import { usePagination } from '../../hooks';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const filteredRecipes = useSelector((state) => state?.filteredRecipes);
    const { currentPage, nextPage, previousPage, maxPages, itemsPerPage } =
        usePagination(9, filteredRecipes);

    return (
        <>
            <h1>YumYum</h1>
            <Filters />
            <Pagination
                filteredRecipes={filteredRecipes}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxPages={maxPages}
            />
            <RecipesContainer
                filteredRecipes={filteredRecipes}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
        </>
    );
};
