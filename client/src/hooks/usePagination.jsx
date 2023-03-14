import { useState } from 'react';
import { useSelector } from 'react-redux';

export const usePagination = (perPage, filteredRecipes) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(perPage);
    const maxPages =
        filteredRecipes && Math.ceil(filteredRecipes.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return {
        currentPage,
        nextPage,
        previousPage,
        itemsPerPage,
        maxPages,
    };
};
