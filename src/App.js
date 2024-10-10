import './App.css';
import styles from './app.module.css'
import {Field} from "./Field/field";
import {Information} from "./Information/information"
import { useState} from "react";



function App() {
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)

    const [field, setField] = useState(Array(9).fill(''));
//     const handleCellClick = (index) => {
//         if (isGameEnded || field[index]) return;
//         // const newField = [...field];
//         // newField[index] = currentPlayer;
//         // setField(newField);
// setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');//

        return (
            <div className={styles.game}>
                <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}></Information>
                <Field currentPlayer={currentPlayer} field={field} ></Field>
            </div>
        );

}
export default App;
