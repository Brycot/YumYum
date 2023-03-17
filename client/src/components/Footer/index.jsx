import React from 'react';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
                Coded with 💙 By <a target="_blank" href="https://github.com/Brycot">Brycot</a>
            </p>
        </div>
    );
};
