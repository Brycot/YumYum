import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { Input } from '../Input';

import styles from './FormCreate.module.css';
//Estado inicial del formulario
const formData = {
    title: '',
    summary: '',
    image: '',
    readyInMinutes: '',
    servings: '',
    pricePerServing: '',
    healthScore: '',
};
//Validaciones por cada campo del formulario
const formValidations = {
    title: [
        (value) => value.length >= 2,
        'Name must have more of two characters',
    ],
    summary: [
        (value) => value.length >= 10,
        'Name must have more of 10 characters',
    ],
    image: [(value) => value.includes('https://'), 'Url Image is not valid'],
    readyInMinutes: [(value) => value.length >= 1, 'Is Required'],
    servings: [(value) => value.length >= 1, 'Is Required'],
    pricePerServing: [(value) => value.length >= 1, 'Is Required'],
    healthScore: [
        (value) => value >= 1 && value <= 100,
        'Enter a number between 1 and 100',
    ],
};

export const FormCreate = () => {
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);
    // Uso el customhooks useForm el cual me regresa el value para cada input, la funcion onInputchange y por cada input si su valor es valido o no
    const {
        title,
        summary,
        image,
        readyInMinutes,
        servings,
        pricePerServing,
        healthScore,
        onInputChange,
        pricePerServingValid,
        readyInMinutesValid,
        servingsValid,
        healthScoreValid,
        titleValid,
        imageValid,
        summaryValid,
    } = useForm(formData, formValidations);
    const onClose = () => {
        dispatch({ type: 'TOGGLE_CREATE' });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonClone}`}
                    onClick={onClose}
                >
                    x
                </button>
                <div className={styles.Container}>
                    <label className={styles.label}>Name</label>
                    <input
                        className={styles.input}
                        name="title"
                        value={title}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Bistek"
                    />
                    <label className={styles.label}>Summary</label>
                    <textarea
                        className={styles.textarea}
                        name="summary"
                        value={summary}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Delicius bistek"
                    />
                    <label className={styles.label}>Servings</label>
                    <input
                        className={styles.input}
                        name="servings"
                        value={servings}
                        onChange={onInputChange}
                        type="number"
                        placeholder="8"
                    />
                    <label className={styles.label}>Price per serving</label>
                    <input
                        className={styles.input}
                        name="pricePerServing"
                        value={pricePerServing}
                        onChange={onInputChange}
                        type="number"
                        placeholder="$2.88"
                    />
                    <label className={styles.label}>Time of preparation</label>
                    <input
                        className={styles.input}
                        name="readyInMinutes"
                        value={readyInMinutes}
                        onChange={onInputChange}
                        type="number"
                        placeholder="23 Minutes"
                    />
                    <label className={styles.label}>Health Score</label>
                    <input
                        className={styles.input}
                        name="healthScore"
                        value={healthScore}
                        onChange={onInputChange}
                        type="number"
                        placeholder="56"
                    />
                </div>
                <div className={styles.Container}>
                    <label className={styles.label}>Image Url</label>
                    <input
                        className={styles.input}
                        name="image"
                        value={image}
                        onChange={onInputChange}
                        type="text"
                        placeholder="https://....."
                    />
                    <img src={image} alt="" />
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="origin">
                            Origin
                        </label>
                        <select
                            className={styles.select}
                            id="origin"
                            name="origin"
                        >
                            <option value="Origin">Select</option>
                            {cuisines &&
                                cuisines.map((cuisine, i) => (
                                    <option key={i} value={cuisine.name}>
                                        {cuisine.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="Diets">
                            Diet Type
                        </label>
                        <select
                            className={styles.select}
                            id="diets"
                            name="diets"
                        >
                            <option value="All">Select</option>
                            {diets &&
                                diets.map((diet, i) => (
                                    <option key={i} value={diet.name}>
                                        {diet.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <button className={styles.button} type="submit">
                        Create Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};
