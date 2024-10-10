import React from 'react';
import styles from './field.module.css'
import {findAllByDisplayValue} from "@testing-library/react";

export const Field = ({currentPlayer , field}, index) => {
    return (
        <>
        <div className={styles.background}>
        <div className={styles.field}>
            {field.map((currentPlayer, index) => (
                <button onClick={()=>(
                    <div>{currentPlayer}</div>
                )} key={index} className={styles.cell}></button>
            ))}
        </div>
        </div>
        </>
    );
};

