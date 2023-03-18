import React from 'react';
import { Footer, Navbar } from '../../components';

import styles from './AboutPage.module.css';

export const AboutPage = () => {
    return (
        <>
            <Navbar />
            <section className={styles.section}>
                <h1>Acerca de mi y el proyecto</h1>
            </section>
            <section className={styles.section}>
                <div className={styles.aboutMe}>
                    <h2 className={styles.title}>Conoce mas de mi!</h2>
                    <p className={styles.text}>
                        Hola! Soy Bryan, un desarrollador Full-Stack con una
                        actitud positiva y orientada al trabajo en equipo, con
                        habilidades técnicas sólidas y una pasión por la
                        resolución de conflictos. Estoy seguro de que puedo
                        hacer una contribución significativa a cualquier equipo
                        de desarrollo y estoy emocionado de seguir creciendo y
                        aprendiendo en mi carrera como desarrollador.
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.aboutMe}>
                    <h2 className={styles.title}>Sobre la aplicación</h2>
                    <p className={styles.text}>
                        Como parte del bootcamp henry, hice el proyecto
                        individual que consistía en crear una aplicación
                        fullstack usando la API de recetas de spoonacular. La
                        aplicación está hecha con el stack React, Redux,
                        Express.js, postgreSQL y Sequelize. En las
                        funcionalidades esta ver recetas de todo tipo, filtrar
                        por requerimientos, buscar recetas y también crear
                        recetas propias las cuales se guardaran en la base de
                        datos.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};
