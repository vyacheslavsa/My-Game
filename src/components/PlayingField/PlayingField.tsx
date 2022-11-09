import React, {useEffect, useState} from 'react';
import "./styles.css";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {allCombinations, arrFields} from "../../constans";
import {
    changeCurrentField,
    changeCurrentMove,
    changeCurrentUsers,
    changeResults, openRating
} from "../../store/redusers/gameReducer";
import RankingTable from "../RankingTable/RankingTable";
import {Results} from "../../types/types";

const PlayingField: React.FC = () => {
    const dispatch = useDispatch()

    const {gameInfo} = useTypeSelector(state => state)
    const {fieldValues, currentMove, userNames, openRankingTable, resultsGames} = gameInfo

    const [count, setCount] = useState<number>(0);
    const [numberOfStepsX, setNumberOfStepsX] = useState<number>(0);
    const [numberOfStepsO, setNumberOfStepsO] = useState<number>(0);

    const winX = fieldValues[allCombinations[0][0]].value && fieldValues[allCombinations[0][1]].value && fieldValues[allCombinations[0][2]].value ||
        fieldValues[allCombinations[1][0]].value && fieldValues[allCombinations[1][1]].value && fieldValues[allCombinations[1][2]].value ||
        fieldValues[allCombinations[2][0]].value && fieldValues[allCombinations[2][1]].value && fieldValues[allCombinations[2][2]].value ||
        fieldValues[allCombinations[3][0]].value && fieldValues[allCombinations[3][1]].value && fieldValues[allCombinations[3][2]].value ||
        fieldValues[allCombinations[4][0]].value && fieldValues[allCombinations[4][1]].value && fieldValues[allCombinations[4][2]].value ||
        fieldValues[allCombinations[5][0]].value && fieldValues[allCombinations[5][1]].value && fieldValues[allCombinations[5][2]].value ||
        fieldValues[allCombinations[6][0]].value && fieldValues[allCombinations[6][1]].value && fieldValues[allCombinations[6][2]].value ||
        fieldValues[allCombinations[7][0]].value && fieldValues[allCombinations[7][1]].value && fieldValues[allCombinations[7][2]].value

    const winO = fieldValues[allCombinations[0][0]].value === false && fieldValues[allCombinations[0][1]].value === false && fieldValues[allCombinations[0][2]].value === false ||
        fieldValues[allCombinations[1][0]].value === false && fieldValues[allCombinations[1][1]].value === false && fieldValues[allCombinations[1][2]].value === false ||
        fieldValues[allCombinations[2][0]].value === false && fieldValues[allCombinations[2][1]].value === false && fieldValues[allCombinations[2][2]].value === false ||
        fieldValues[allCombinations[3][0]].value === false && fieldValues[allCombinations[3][1]].value === false && fieldValues[allCombinations[3][2]].value === false ||
        fieldValues[allCombinations[4][0]].value === false && fieldValues[allCombinations[4][1]].value === false && fieldValues[allCombinations[4][2]].value === false ||
        fieldValues[allCombinations[5][0]].value === false && fieldValues[allCombinations[5][1]].value === false && fieldValues[allCombinations[5][2]].value === false ||
        fieldValues[allCombinations[6][0]].value === false && fieldValues[allCombinations[6][1]].value === false && fieldValues[allCombinations[6][2]].value === false ||
        fieldValues[allCombinations[7][0]].value === false && fieldValues[allCombinations[7][1]].value === false && fieldValues[allCombinations[7][2]].value === false

    const sortByResult = (arr: Results[]): Results[] => {
        return arr.sort((a: Results, b: Results) => {
            return a.result! > b.result! ? 1 : -1
        })
    };

    useEffect(() => {
        if (!userNames.user_one && !userNames.user_two) {
            const user1 = prompt('Введите имя первого игрока(х)')
            const user2 = prompt('Введите имя второго игрока(о)')
            dispatch(changeCurrentUsers({user_one: user1 || 'user1', user_two: user2 || 'user2'}))
        }
    }, [userNames])

    const resetToInitial = () => {
        dispatch(changeCurrentField(arrFields))
        dispatch(changeCurrentMove(true))
        setNumberOfStepsX(0)
        setNumberOfStepsO(0)
        setCount(0)
    }

    const saveResult = (user: string | null, result: number): void => {
        const copyArr = [...resultsGames]
        copyArr.push({name: user, result: result})
        dispatch(changeResults(sortByResult(copyArr).slice(0, 10)))
    }

    const showWinner = (user: string | null) => {
        setTimeout(() => {
            alert(`Победил ${user} 🤩`)
            saveResult(user, currentMove ? numberOfStepsO : numberOfStepsX)
            dispatch(openRating(true))
            resetToInitial()
        }, 100)
    }

    const victoryCheck = () => {
        if (winX) showWinner(userNames.user_one)
        if (winO) showWinner(userNames.user_two)
    }

    const changeField = (id: number) => {
        const copyArr = [...fieldValues]
        const indexElement = copyArr.findIndex(item => item.id === id)
        if (copyArr[indexElement].value === null) {
            copyArr[indexElement] = {id: id, value: currentMove ? true : currentMove !== null && false}
            dispatch(changeCurrentField(copyArr))
            dispatch(changeCurrentMove(!currentMove))
            setCount(count + 1)
            currentMove ? setNumberOfStepsX(numberOfStepsX + 1) : setNumberOfStepsO(numberOfStepsO + 1)
        }
    }

    useEffect(() => {
        if (count < 9) {
            victoryCheck()
        } else if (winX || winO) {
            victoryCheck()
            setCount(0)
        } else if (count === 9) {
            setTimeout(() => {
                setCount(0)
                alert('Ничья 🤔')
                setTimeout(() => resetToInitial(), 100)
            }, 100)
        }
    }, [fieldValues])

    return (
        <>
            <div className="grid">
                {fieldValues.map(item => (
                    <div
                        key={item.id}
                        onClick={() => changeField(item.id)}
                    >
                        {item.value ? 'x' : item.value !== null && 'o'}
                    </div>
                ))}
            </div>
            {openRankingTable && <RankingTable/>}
        </>
    );
};

export default PlayingField;
