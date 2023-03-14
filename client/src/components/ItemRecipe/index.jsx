import React from 'react';

import styles from './ItemRecipe.module.css';

export const ItemRecipe = ({ id, image, title, servings, dietas }) => {
    const diets = dietas.map((element) => element + ',');
    return (
        <div className={styles.itemContainer} key={id}>
            <div className={styles.imgInfo}>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z"
                            fill="#ffffff"
                        />
                    </svg>
                    <p>More</p>
                </div>
                <img className={styles.img} src={image} alt={title} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.servingContainer}>
                    <p>Servings</p>
                    {/* <span>{servings}</span> */}
                    <div>
                        {Array.from({ length: servings }).map((a, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#abbbc2"
                                width="800px"
                                height="800px"
                                viewBox="0 0 32 32"
                            >
                                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className={styles.dietsContainer}>
                    <p>Diets</p>
                    <div>
                        {diets.slice(0, 2).map((dieta, i) => (
                            <span key={i * 2}>{dieta}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
