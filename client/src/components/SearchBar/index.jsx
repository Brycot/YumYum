import React from 'react';

import styles from './SearchBar.module.css';

export const SearchBar = () => {
    return (
        <form className={styles.form}>
            <input
                className={styles.inputSearch}
                placeholder="Search recipes..."
                type="text"
            />
            <button className={styles.button} type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        opacity="0.1"
                        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        fill="#ea7c69"
                    />
                    <path
                        d="M17 17L21 21"
                        stroke="#ea7c69"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                        stroke="#ea7c69"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </form>
    );
};
