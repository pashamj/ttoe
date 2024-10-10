import React from 'react';
import styles from './information.module.css'


export const Information = ({isDraw, isGameEnded, currentPlayer}) => {

    let result = '123s'

    if (isDraw === true) {
        result = 'Ничья'
    } else if (isDraw === false && isGameEnded === true) {
        result = `Победа ${currentPlayer}`
    } else if (isDraw === false && isGameEnded === false) {
        result = `Ходит ${currentPlayer}`
    }


    return (
        <>
        <div className={styles.info}>
            {result}
        </div>
        </>
    );
};

