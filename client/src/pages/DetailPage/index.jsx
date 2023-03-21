import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../redux/actions';
import { deleteRecipe } from '../../redux/actions';
import { LoadingGlobal, Navbar } from '../../components';

import styles from './DetailPage.module.css';

export const DetailPage = () => {
    const history = useHistory();
    const { recipeId } = useParams();
    const dispatch = useDispatch();
    const {
        summary,
        image,
        title,
        servings,
        diets,
        steps,
        readyInMinutes,
        pricePerServing,
        healthScore,
        db,
        id,
    } = useSelector((state) => state?.recipe);
    const onLoading = useSelector((state) => state.onLoading);
    const ingredients = steps
        ?.flatMap((step) => step.ingredients)
        .map((ingredient) => {
            return {
                ...ingredient,
                name:
                    ingredient.name.charAt(0).toUpperCase() +
                    ingredient.name.slice(1),
            };
        });
    const Diets = diets
        ?.map((diet) => diet.charAt(0).toUpperCase() + diet.slice(1))
        .join(' - ');

    const onDelete = () => {
        history.push('/home');
        dispatch(deleteRecipe(id));
    };
    useEffect(() => {
        dispatch(getRecipeDetail(recipeId));
    }, []);
    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                {onLoading ? (
                    <>
                        <LoadingGlobal />
                    </>
                ) : (
                    <>
                        <section className={styles.titleContainer}>
                            <img src={image} alt="" />

                            <div className={styles.title}>
                                <h1>{title}</h1>
                            </div>
                            <div className={styles.diets}>
                                <p>{Diets}</p>
                            </div>
                            <div className={styles.summary}>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: summary,
                                    }}
                                ></p>
                            </div>
                        </section>
                        <section className={styles.stepsContainer}>
                            <div className={styles.steps}>
                                <h4>Method</h4>
                                <section className={styles.container}>
                                    {steps?.map(({ step, number }) => (
                                        <div key={step} className={styles.step}>
                                            <span>STEP {number}</span>
                                            <div>
                                                <p>{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                                <div className={styles.stepsShadow}></div>
                            </div>
                        </section>
                        <section className={styles.infoSectionContainer}>
                            <div className={styles.infoSection}>
                                <div className={styles.recipeInfo}>
                                    <div className={styles.infoText}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#9199ae"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 32 32"
                                            version="1.1"
                                        >
                                            <title>health</title>
                                            <path d="M29.125 10.375h-7.5v-7.5c0-1.036-0.839-1.875-1.875-1.875h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5h-7.5c-1.036 0-1.875 0.84-1.875 1.875v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5v7.5c0 1.036 0.84 1.875 1.875 1.875h7.5c1.036 0 1.875-0.84 1.875-1.875v-7.5h7.5c1.035 0 1.875-0.839 1.875-1.875v-7.5c0-1.036-0.84-1.875-1.875-1.875z" />
                                        </svg>
                                        <p>{healthScore}</p>
                                    </div>
                                    <div className={styles.infoText}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                opacity="0.1"
                                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                fill="#9199ae"
                                            />
                                            <path
                                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M12 7L12 12"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21 4L20 3"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p>{readyInMinutes} minutes</p>
                                    </div>
                                    <div className={styles.infoText}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#9199ae"
                                            width="19px"
                                            height="19px"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 .5A7.76 7.76 0 0 0 0 8a7.76 7.76 0 0 0 8 7.5A7.76 7.76 0 0 0 16 8 7.76 7.76 0 0 0 8 .5zm6.71 6.8L13.48 7c-.25-.07-.27-.09-.29-.12-.15-.2-.32-.47-.48-.73 0-.09-.13-.23-.16-.31s.35-.6.51-.84a2.43 2.43 0 0 1 .59-.45 5.87 5.87 0 0 1 1.06 2.75zM8 1.75l-.09.17a.19.19 0 0 1 0-.1c0 .06-.15.15-.25.25l-.3.29a.85.85 0 0 0-.08 1.08h-.12a1.05 1.05 0 0 0-.81.42 1.27 1.27 0 0 0-.2 1.07V5a3 3 0 0 0-.43.11l-.24.08-.64.21a1.2 1.2 0 0 0-.81.8 1 1 0 0 0 .2.93 5.67 5.67 0 0 0 1.38 1.09 4.17 4.17 0 0 0 1.67.65h1.68a1.2 1.2 0 0 1 1.04.51.49.49 0 0 1 .13.43.77.77 0 0 1-.15.35 2.71 2.71 0 0 0-.95 1.61 11.11 11.11 0 0 1-.48 1.38c-.12.31-.23.61-.31.85a3.32 3.32 0 0 1-1-.08 3.28 3.28 0 0 0-.5-2.12 2.24 2.24 0 0 1-.53-1.42 2.11 2.11 0 0 0-1.47-2.29 10.81 10.81 0 0 1-2.9-2.64A6.79 6.79 0 0 1 8 1.75zM1.25 8a5.64 5.64 0 0 1 .12-1.16 10.29 10.29 0 0 0 2.94 2.42c.6.22.69.45.69 1.12a3.45 3.45 0 0 0 .86 2.27A3.05 3.05 0 0 1 6 14a6.35 6.35 0 0 1-4.75-6zm8.32 6.08c0-.15.12-.32.18-.48a10.2 10.2 0 0 0 .55-1.6 1.55 1.55 0 0 1 .54-.86 1.91 1.91 0 0 0 .57-1.3 1.71 1.71 0 0 0-.47-1.27 2.45 2.45 0 0 0-2-.9H7.35a4.77 4.77 0 0 1-2-1.11l.47-.16.27-.08a.79.79 0 0 1 .38-.07l.09.15a.64.64 0 0 0 .81.29.65.65 0 0 0 .34-.8v-.18c-.11-.3-.24-.72-.32-1A1.42 1.42 0 0 0 8.68 4a1 1 0 0 0-.18-1 3.44 3.44 0 0 0 .33-.34 1 1 0 0 0 .22-.8 6.93 6.93 0 0 1 3.73 1.8 3 3 0 0 0-.79.7 9.14 9.14 0 0 0-.64 1.09 1.46 1.46 0 0 0 .24 1.39c.18.31.38.61.56.86a1.58 1.58 0 0 0 1 .58c.22.06 1 .22 1.55.33a6.44 6.44 0 0 1-5.13 5.47z" />
                                        </svg>
                                        <p>Mexican</p>
                                    </div>
                                    <div className={styles.infoText}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21px"
                                            height="21px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 7V17"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="#9199ae"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <p>${pricePerServing}</p>
                                    </div>
                                    <div className={styles.infoText}>
                                        <p className={styles.servings}>
                                            Serves
                                        </p>
                                        <div>
                                            {Array.from({
                                                length: servings,
                                            }).map((a, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#000000"
                                                    width="20px"
                                                    height="20px"
                                                    viewBox="0 0 32 32"
                                                >
                                                    <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.recipeIngredients}>
                                    <p className={styles.ingredientsTitle}>
                                        Ingredients
                                    </p>

                                    <div
                                        className={styles.ingredientsContainer}
                                    >
                                        {ingredients?.map((ingredient, i) => (
                                            <p key={i}>{ingredient.name}</p>
                                        ))}
                                        {!steps && (
                                            <>
                                                <p>Ingredients</p>
                                                <p>Not available</p>
                                            </>
                                        )}
                                    </div>
                                    {db && (
                                        <button
                                            onClick={onDelete}
                                            className={styles.buttonDelete}
                                        >
                                            Delete Recipe
                                        </button>
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </>
    );
};
