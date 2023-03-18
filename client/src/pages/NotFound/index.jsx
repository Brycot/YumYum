import React from 'react';
import { Navbar } from '../../components/Navbar';

import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.Container}>
                <h1>404</h1>
                <h3>NotFound</h3>
            </div>
        </main>
    );
};
