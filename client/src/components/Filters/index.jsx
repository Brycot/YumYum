import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCuisines,
    getAllDiets,
    getAllRecipes,
    sortByCuisine,
    sortByDiet,
    sortByName,
    sortByScore,
} from '../../redux/actions';

import styles from './Filters.module.css';

export const Filters = () => {
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);

    const handleSort = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByName(selectedValue));
    };
    const handleSortByCuisine = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByCuisine(selectedValue));
    };
    const handleSortByDiet = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByDiet(selectedValue));
    };
    const handleSortByScore = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortByScore(selectedValue));
    };
    useEffect(() => {
        dispatch(getAllRecipes());
        dispatch(getAllCuisines());
        dispatch(getAllDiets());
    }, []);
    return (
        <section className={styles.filtersContainer}>
            <div>
                <label htmlFor="sort">Sort</label>
                <select id="sort" name="Sort" onChange={handleSort}>
                    <option value="sort">[A-Z]</option>
                    <option value="asc">Name (A-Z)</option>
                    <option value="desc">Name (Z-A)</option>
                </select>
            </div>
            <div>
                <label htmlFor="origin">Origin</label>
                <select
                    id="origin"
                    name="origin"
                    onChange={handleSortByCuisine}
                >
                    <option value="All">All</option>
                    {cuisines &&
                        cuisines.map((cuisine, i) => (
                            <option key={i} value={cuisine.name}>
                                {cuisine.name}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <label htmlFor="Diets">Diet Type</label>
                <select id="Diets" name="Diets" onChange={handleSortByDiet}>
                    <option value="All">All</option>
                    {diets &&
                        diets.map((diet, i) => (
                            <option key={i} value={diet.name}>
                                {diet.name}
                            </option>
                        ))}
                </select>
            </div>

            <div>
                <label htmlFor="Diets">Health Score</label>
                <select id="Diets" name="Diets" onChange={handleSortByScore}>
                    <option value="All">All</option>
                    <option value="asc">Highest (↑)</option>
                    <option value="desc">Lowest (↓)</option>
                </select>
            </div>

            <button>
                <span>Delete Filters</span>
            </button>
        </section>
    );
};
