import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
export const Navbar = () => {
    return (
        <div className={styles.container}>
            <h2>
                Yum<span>Yum</span>
            </h2>
            <div>
                <NavLink
                    exact
                    to="/home"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    exact
                    to="/about"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    About Us
                </NavLink>
                <NavLink
                    exact
                    to="/"
                    className={(isActive) =>
                        isActive ? styles.active : styles.inactive
                    }
                >
                    Exit
                </NavLink>
            </div>
        </div>
    );
};
