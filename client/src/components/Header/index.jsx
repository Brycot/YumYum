import React from 'react';
import { Navbar } from '../Navbar';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.image}>
                <img
                    src="https://cdn.dribbble.com/users/6024852/screenshots/15977513/media/08b880d8c0086fab1b58671d8a3d0b31.jpeg"
                    alt=""
                />
            </div>
        </header>
    );
};
