import React from 'react';
import './styles.css'
import {useTypeSelector} from "../../hooks/useTypeSelector";

const InfoBoard: React.FC = () => {

    const {gameInfo} = useTypeSelector(state => state)
    const {currentMove} = gameInfo

    return (
        <div className='rootInfo'>
            <p>Текущий ход: {currentMove ? "User 1(X)" : "User 2(0)"}</p>
        </div>
    );
};

export default InfoBoard;
