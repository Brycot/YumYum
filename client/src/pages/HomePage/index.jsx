import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Filters,
    RecipesContainer,
    Pagination,
    Browser,
    SearchBar,
    CreateButton,
    FormCreate,
    Modal,
    Header,
    LoadingGlobal,
} from '../../components';
import { getAllRecipes } from '../../redux/actions';
import { usePagination } from '../../hooks';

import styles from './HomePage.module.css';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
    const dispatch = useDispatch();

    const filteredRecipes = useSelector((state) => state.filteredRecipes);
    const onCreate = useSelector((state) => state.onCreate);
    const created = useSelector((state) => state.created);
    const onLoading = useSelector((state) => state.onLoading);
    const { currentPage, nextPage, previousPage, maxPages, itemsPerPage } =
        usePagination(9);

    useEffect(() => {
        dispatch(getAllRecipes());
    }, []);
    return (
        <main className={styles.main}>
            <Header />
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
            {onLoading && <LoadingGlobal />}
            {!onLoading && (
                <RecipesContainer
                    filteredRecipes={filteredRecipes}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                />
            )}
            {onCreate && <FormCreate />}
            {created && (
                <Modal
                    title="Recipe created"
                    subtitle="(Reload page for view changes)"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#6e7077"
                            width="200px"
                            height="200px"
                            viewBox="0 0 64 64"
                        >
                            <g id="food">
                                <path d="M58,7a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,58,7Zm0,4a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,58,11Z" />

                                <circle cx="9" cy="11" r="1" />

                                <path d="M16.5,45A4.5,4.5,0,1,0,21,49.5,4.505,4.505,0,0,0,16.5,45Z" />

                                <circle cx="40" cy="18" r="2" />

                                <circle cx="26" cy="18" r="2" />

                                <path d="M35,58H26.418l1.0194-6.66A24.0854,24.0854,0,0,0,33,52H51a1,1,0,0,0,0-2H42.5779A23.9965,23.9965,0,1,0,9.0086,27.6613l-1.6126.6873a.9826.9826,0,0,0-.556.6528l-.5788-1.2743A1.0008,1.0008,0,0,0,4.937,27.23L2.2056,28.4707a1,1,0,0,0-.4971,1.3242L5.89,39h-.669a1,1,0,0,0-.9883,1.1514l2.9087,19A1,1,0,0,0,8.1294,60H35a1,1,0,0,0,0-2ZM13.1284,29.01l.9888.1494L12.6271,39H11.6158Zm7.73-3.9024.9687.2456-1,3.9431-.2339.0354a1,1,0,0,0-.8388,1.1387l.29,1.9137L18.368,39H17.3361ZM25,31.7054l.98-2.3011.92.3921-1.6153,3.7907Zm3.1-3.5717-1.9485-.83A.6813.6813,0,0,1,26.707,27h1.9078Zm-4.2718,9.1939a.9672.9672,0,0,0,.0426.1171L23.1643,39H23.07l-1.1871-7.8408.9888-.1494Zm6.3184-8.8628.91.4136L26.4592,39H25.3613ZM33,6a22,22,0,1,1-5.2593,43.3585L29.15,40.1514a.9745.9745,0,0,0-.5443-1.04L31.4271,32.9a13.5047,13.5047,0,0,0,1.5905.1c3.4551,0,6.6621-1.3379,8.37-3.4917a2.8073,2.8073,0,0,0,.33-2.9868A2.652,2.652,0,0,0,39.3193,25H26.707a2.6577,2.6577,0,0,0-2.1914,1.1528,2.7477,2.7477,0,0,0-.3716,2.4585l-.135.3169a1.012,1.012,0,0,0-.4485-.0459l-.5869.0889,1.0386-4.0962a1,1,0,0,0-.7236-1.2148l-2.9077-.7373a.999.999,0,0,0-1.2149.7236L18,28.2451V24a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v2.9672l-.56-.0849a1.01,1.01,0,0,0-.7432.1836.9886.9886,0,0,0-.3328.4817.9765.9765,0,0,0-.3439-.3186A22.0224,22.0224,0,0,1,33,6ZM3.9434,29.8784l.91-.4136L9.1844,39H8.0867ZM8.9878,58,6.3853,41H26.9971L24.3945,58Z" />

                                <path d="M58,58H40a1,1,0,0,0,0,2H58a1,1,0,0,0,0-2Z" />
                            </g>
                        </svg>
                    }
                />
            )}

            <Footer />
        </main>
    );
};
