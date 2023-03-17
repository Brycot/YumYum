import React from 'react';
import { useFilters } from '../../hooks';

import styles from './Filters.module.css';

export const Filters = () => {
    const {
        cuisines,
        diets,
        handleSort,
        handleSortByCuisine,
        handleSortByDiet,
        handleSortByScore,
        handleDeleteFilters,
        handleSortByCreated,
    } = useFilters();

    return (
        <section className={styles.filtersContainer}>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="sort">
                    Sort
                </label>
                <select
                    className={styles.select}
                    id="sort"
                    name="Sort"
                    onChange={handleSort}
                >
                    <option value="sort">[A-Z]</option>
                    <option value="asc">Name (A-Z)</option>
                    <option value="desc">Name (Z-A)</option>
                </select>
            </div>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="origin">
                    Created by
                </label>
                <select
                    className={styles.select}
                    id="created"
                    name="created"
                    onChange={handleSortByCreated}
                >
                    <option value="All">All</option>
                    <option value="api">Api</option>
                    <option value="db">Db</option>
                </select>
            </div>
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="origin">
                    Origin
                </label>
                <select
                    className={styles.select}
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
            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="Diets">
                    Diet Type
                </label>
                <select
                    className={styles.select}
                    id="diets"
                    name="diets"
                    onChange={handleSortByDiet}
                >
                    <option value="All">All</option>
                    {diets &&
                        diets.map((diet, i) => (
                            <option key={i} value={diet.name}>
                                {diet.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className={styles.filterContainer}>
                <label className={styles.label} htmlFor="Diets">
                    Health Score
                </label>
                <select
                    className={styles.select}
                    id="healthScore"
                    name="healthScore"
                    onChange={handleSortByScore}
                >
                    <option value="All">All</option>
                    <option value="asc">Highest (↑)</option>
                    <option value="desc">Lowest (↓)</option>
                </select>
            </div>

            <button onClick={handleDeleteFilters} className={styles.button}>
                <span>Delete Filters</span>
            </button>
        </section>
    );
};
