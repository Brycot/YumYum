import React from 'react';

import styles from './Pagination.module.css';

export const Pagination = ({
    currentPage,
    nextPage,
    previousPage,
    maxPages,
}) => {
    return (
        <div className={styles.paginationContainer}>
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
