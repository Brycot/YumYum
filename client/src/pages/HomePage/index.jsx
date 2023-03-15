import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Filters,
    RecipesContainer,
    Pagination,
    Browser,
    SearchBar,
    CreateButton,
} from '../../components';
import { getAllRecipes } from '../../redux/actions';
import { usePagination } from '../../hooks';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const dispatch = useDispatch();

    const filteredRecipes = useSelector((state) => state.filteredRecipes);
    const { currentPage, nextPage, previousPage, maxPages, itemsPerPage } =
        usePagination(9);

    useEffect(() => {
        dispatch(getAllRecipes());
    }, []);
    return (
        <main className={styles.main}>
            <h1>YumYum</h1>
            <Filters />
            <Browser>
                <SearchBar />
                <CreateButton />
                <Pagination
                    currentPage={currentPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    maxPages={maxPages}
                />
            </Browser>
            <RecipesContainer
                filteredRecipes={filteredRecipes}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
        </main>
    );
};
