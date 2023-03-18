import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LandingPage.module.css';

export const LandingPage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h1>YUM</h1>
                    <h2>YUM</h2>
                </div>
                <div className={styles.summary}>
                    <div>
                        <p>
                            If you're hungry and want to eat something delicious
                            and easy to prepare, you'll find hundreds of recipes
                            here. From breakfast to desserts, there are options
                            for every taste and lifestyle. Don't miss out on the
                            delights that await you at YumYum.
                        </p>
                        <Link to="/home">Log in</Link>
                    </div>
                </div>
            </section>
            <section className={styles.sectionImg}>
                <img
                    className={styles.img}
                    src="https://vivalapizza.net/wp-content/uploads/2021/11/vivalapizza_0000s_0024_Viva-la-pizza.png"
                    alt=""
                />
            </section>
        </main>
    );
};
