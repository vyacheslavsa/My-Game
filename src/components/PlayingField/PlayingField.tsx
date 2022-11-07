import React, {useEffect, useState} from 'react';
import "./styles.css";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {GameActions} from "../../types/types";
import {allCombinations} from "../../constans";
import {arrFields} from "../../store/redusers/gameReducer";

const PlayingField: React.FC = () => {
    const dispatch = useDispatch()
    const {gameInfo} = useTypeSelector(state => state)
    const {fieldValues, currentMove} = gameInfo

    const [count, setCount] = useState<number>(0)

    const resetToInitial = () => {
        dispatch({type: GameActions.CHANGE_FIELD, payload: arrFields})
        dispatch({type: GameActions.CHANGE_MOVE, payload: true})
        setCount(0)
    }

    const victoryCheck = () => {
        if (
            fieldValues[allCombinations[0][0]].value && fieldValues[allCombinations[0][1]].value && fieldValues[allCombinations[0][2]].value ||
            fieldValues[allCombinations[1][0]].value && fieldValues[allCombinations[1][1]].value && fieldValues[allCombinations[1][2]].value ||
            fieldValues[allCombinations[2][0]].value && fieldValues[allCombinations[2][1]].value && fieldValues[allCombinations[2][2]].value ||
            fieldValues[allCombinations[3][0]].value && fieldValues[allCombinations[3][1]].value && fieldValues[allCombinations[3][2]].value ||
            fieldValues[allCombinations[4][0]].value && fieldValues[allCombinations[4][1]].value && fieldValues[allCombinations[4][2]].value ||
            fieldValues[allCombinations[5][0]].value && fieldValues[allCombinations[5][1]].value && fieldValues[allCombinations[5][2]].value ||
            fieldValues[allCombinations[6][0]].value && fieldValues[allCombinations[6][1]].value && fieldValues[allCombinations[6][2]].value ||
            fieldValues[allCombinations[7][0]].value && fieldValues[allCombinations[7][1]].value && fieldValues[allCombinations[7][2]].value
        ) {
            setTimeout(() => {
                alert('win x')
                resetToInitial()
            }, 100)
        } else if (
            fieldValues[allCombinations[0][0]].value === false && fieldValues[allCombinations[0][1]].value === false && fieldValues[allCombinations[0][2]].value === false ||
            fieldValues[allCombinations[1][0]].value === false && fieldValues[allCombinations[1][1]].value === false && fieldValues[allCombinations[1][2]].value === false ||
            fieldValues[allCombinations[2][0]].value === false && fieldValues[allCombinations[2][1]].value === false && fieldValues[allCombinations[2][2]].value === false ||
            fieldValues[allCombinations[3][0]].value === false && fieldValues[allCombinations[3][1]].value === false && fieldValues[allCombinations[3][2]].value === false ||
            fieldValues[allCombinations[4][0]].value === false && fieldValues[allCombinations[4][1]].value === false && fieldValues[allCombinations[4][2]].value === false ||
            fieldValues[allCombinations[5][0]].value === false && fieldValues[allCombinations[5][1]].value === false && fieldValues[allCombinations[5][2]].value === false ||
            fieldValues[allCombinations[6][0]].value === false && fieldValues[allCombinations[6][1]].value === false && fieldValues[allCombinations[6][2]].value === false ||
            fieldValues[allCombinations[7][0]].value === false && fieldValues[allCombinations[7][1]].value === false && fieldValues[allCombinations[7][2]].value === false
        ) {
            setTimeout(() => {
                alert('win O')
                resetToInitial()
            }, 100)

        }
    }


    const changeField = (id: number) => {
        const copyArr = [...fieldValues]
        const indexElement = copyArr.findIndex(item => item.id === id)
        if (copyArr[indexElement].value === null) {
            copyArr[indexElement] = {id: id, value: currentMove ? true : currentMove !== null && false}
            dispatch({type: GameActions.CHANGE_FIELD, payload: copyArr})
            dispatch({type: GameActions.CHANGE_MOVE, payload: !currentMove})
        }
        setCount(count + 1)
    }


    useEffect(() => {
        if (count < 9) {
            victoryCheck()
        } else {
            setTimeout(() => {
                alert('draw')
                resetToInitial()
            }, 100)
        }
    }, [fieldValues])

    return (
        <div className="grid">
            {fieldValues.map(item => (
                <div key={item.id}
                     onClick={() => changeField(item.id)}>{item.value ? 'x' : item.value !== null && 'o'}</div>
            ))}
        </div>
    );
};

export default PlayingField;
