import React from 'react';
import './styles.css'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {openRating} from "../../store/redusers/gameReducer";

const InfoBoard: React.FC = () => {

    const {gameInfo} = useTypeSelector(state => state)
    const {currentMove, userNames} = gameInfo
    const dispatch = useDispatch()

    return (
        <div className='rootInfo'>
            <p>Текущий ход: {currentMove ? userNames.user_one : userNames.user_two}</p>
            <button onClick={()=> dispatch(openRating(true))}>Показать результаты</button>
        </div>
    );
};

export default InfoBoard;
