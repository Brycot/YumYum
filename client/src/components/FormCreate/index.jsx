import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { createRecipe } from '../../redux/actions';

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
    cuisines: [],
    diets: [],
};
const stepsData = [];
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
    cuisines: [(value) => value.length >= 1, 'Is Required'],
    diets: [(value) => value.length >= 1, 'Is Required'],
};

export const FormCreate = () => {
    const [nSteps, setNSteps] = useState(2);
    const [submited, setSubmited] = useState(false);
    const dispatch = useDispatch();
    const cuisines = useSelector((state) => state?.cuisines);
    const diets = useSelector((state) => state?.diets);
    // Uso el customhooks useForm el cual me regresa el value para cada input,
    // la funcion onInputchange y por cada input si su valor es valido o no
    const {
        title,
        summary,
        image,
        readyInMinutes,
        servings,
        pricePerServing,
        healthScore,
        formState,
        diets: dietsState,
        isformValid,
        onInputChange,
        onSelectChange,
        onSelectDelete,
        pricePerServingValid,
        readyInMinutesValid,
        servingsValid,
        healthScoreValid,
        titleValid,
        imageValid,
        summaryValid,
        dietsValid,
    } = useForm(formData, formValidations);

    const { formState: formStepsState, onInputChange: onStepChange } =
        useForm(stepsData);
    const onClose = () => {
        dispatch({ type: 'TOGGLE_CREATE' });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setSubmited(true);
        if (!isformValid) return;
        dispatch(createRecipe(formState, formStepsState));
        dispatch({ type: 'TOGGLE_CREATE' });
    };
    const addStep = () => {
        setNSteps(nSteps + 1);
    };
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonClone}`}
                    onClick={onClose}
                >
                    x
                </button>
                {/* column recipe info */}
                <div className={styles.Container}>
                    <label className={styles.label}>Name</label>
                    <input
                        className={
                            !!titleValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="title"
                        value={title}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Bistek"
                    />
                    {!!titleValid && submited && (
                        <p className={styles.errorText}>{titleValid}</p>
                    )}
                    <label className={styles.label}>Summary</label>
                    <textarea
                        className={
                            !!titleValid && submited
                                ? styles.textareaError
                                : styles.textarea
                        }
                        name="summary"
                        value={summary}
                        onChange={onInputChange}
                        type="text"
                        placeholder="Delicius bistek"
                    />
                    {!!summaryValid && submited && (
                        <p className={styles.errorText}>{summaryValid}</p>
                    )}
                    <label className={styles.label}>Servings</label>
                    <input
                        className={
                            !!servingsValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="servings"
                        value={servings}
                        onChange={onInputChange}
                        type="number"
                        placeholder="8"
                    />
                    {!!servingsValid && submited && (
                        <p className={styles.errorText}>{servingsValid}</p>
                    )}
                    <label className={styles.label}>Price per serving</label>
                    <input
                        className={
                            !!pricePerServingValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="pricePerServing"
                        value={pricePerServing}
                        onChange={onInputChange}
                        type="number"
                        placeholder="$2.88"
                    />
                    {!!pricePerServingValid && submited && (
                        <p className={styles.errorText}>
                            {pricePerServingValid}
                        </p>
                    )}
                    <label className={styles.label}>Time of preparation</label>
                    <input
                        className={
                            !!readyInMinutesValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="readyInMinutes"
                        value={readyInMinutes}
                        onChange={onInputChange}
                        type="number"
                        placeholder="23 Minutes"
                    />
                    {!!readyInMinutesValid && submited && (
                        <p className={styles.errorText}>
                            {readyInMinutesValid}
                        </p>
                    )}
                    <label className={styles.label}>Health Score</label>
                    <input
                        className={
                            !!healthScoreValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="healthScore"
                        value={healthScore}
                        onChange={onInputChange}
                        type="number"
                        placeholder="56"
                    />
                    {!!healthScoreValid && submited && (
                        <p className={styles.errorText}>{healthScoreValid}</p>
                    )}
                </div>
                {/* Column steps */}
                <div className={`${styles.Container} ${styles.stepsContainer}`}>
                    <span>Ingredients must be separated by commas</span>
                    {Array.from({ length: nSteps }).map((s, i) => (
                        <div className={styles.step} key={i}>
                            <label className={styles.label}>Paso {i + 1}</label>
                            <input
                                className={styles.input}
                                name={`step${i + 1}-step`}
                                type="text"
                                onChange={onStepChange}
                                placeholder="Description"
                            />
                            <input
                                className={styles.input}
                                name={`step${i + 1}-ingredients`}
                                type="text"
                                onChange={onStepChange}
                                placeholder="Ingredients"
                            />
                        </div>
                    ))}

                    <button
                        className={`${styles.button} ${styles.buttonAdd}`}
                        onClick={addStep}
                        type="button"
                    >
                        Add Step
                    </button>
                </div>
                {/* Column image and create recipe */}
                <div className={styles.Container}>
                    <label className={styles.label}>Image Url</label>
                    <input
                        className={
                            !!imageValid && submited
                                ? styles.inputError
                                : styles.input
                        }
                        name="image"
                        value={image}
                        onChange={onInputChange}
                        type="text"
                        placeholder="https://....."
                    />
                    {!!imageValid && submited && (
                        <p className={styles.errorText}>{imageValid}</p>
                    )}
                    <img src={image} alt="" />
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="cuisines">
                            Origin
                        </label>
                        <select
                            className={styles.select}
                            onChange={onSelectChange}
                            id="cuisines"
                            name="cuisines"
                        >
                            <option value="Origin">Select</option>
                            {cuisines &&
                                cuisines.map((cuisine, i) => (
                                    <option key={i} value={cuisine.name}>
                                        {cuisine.name}
                                    </option>
                                ))}
                        </select>
                        {!!dietsValid && submited && (
                            <p className={styles.errorText}>{dietsValid}</p>
                        )}
                    </div>
                    <div className={styles.selectContainer}>
                        <label className={styles.label} htmlFor="Diets">
                            Diet Type
                        </label>
                        <select
                            className={styles.select}
                            onChange={onSelectChange}
                            id="diets"
                            name="diets"
                        >
                            <option value="All">Select</option>
                            {diets &&
                                diets.map(({ name, id }, i) => {
                                    return (
                                        <option key={i} value={id}>
                                            {name}
                                        </option>
                                    );
                                })}
                        </select>
                        <ul className={styles.selectedDietContainer}>
                            {dietsState.length >= 1 &&
                                dietsState.map((diet) => {
                                    const { name } = diets.find((element) => {
                                        return Number(diet) === element.id;
                                    });
                                    return (
                                        <li key={diet}>
                                            <p>{name}</p>
                                            <button
                                                name="diets"
                                                type="button"
                                                onClick={onSelectDelete}
                                                value={diet}
                                                className={styles.deleteDiet}
                                            >
                                                X
                                            </button>
                                        </li>
                                    );
                                })}
                        </ul>
                        {!!dietsValid && submited && (
                            <p className={styles.errorText}>{dietsValid}</p>
                        )}
                    </div>
                    <button className={styles.button} type="submit">
                        Create Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};
