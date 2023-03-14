import React from 'react';
import { usePagination } from '../../hooks';

export const Pagination = ({ currentPage, nextPage, previousPage, maxPages }) => {
    return (
        <div>
            <button disabled={currentPage === 1} onClick={previousPage}>
                {'<'}
            </button>
            <span>
                {currentPage} of {maxPages}
            </span>
            <button disabled={currentPage === maxPages} onClick={nextPage}>
                {'>'}
            </button>
        </div>
    );
};
