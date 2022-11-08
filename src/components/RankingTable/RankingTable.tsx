import React from 'react';
import './styles.css'
import {useDispatch} from "react-redux";
import {openRating} from "../../store/redusers/gameReducer";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const RankingTable = () => {
    const dispatch = useDispatch()
    const {gameInfo} = useTypeSelector(state => state)
    const {resultsGames} = gameInfo
    return (
        <div className="backgroundModal" onClick={() => dispatch(openRating(false))}>
            <div className='modal'>
                <p onClick={() => dispatch(openRating(false))}>+</p>
                <div className="title">Рейтинг</div>
                <div className="content">
                    {resultsGames.length ?
                        <ol style={{width: "100%"}}>
                            {
                                resultsGames.map((item, index) =>
                                    <div
                                        style={{display: "flex", marginBottom: "10px"}}
                                        key={index + 1}
                                    >
                                        <li
                                            style={{width: "300px"}}
                                        >
                                            <span style={{marginRight: "5px"}}>Игрок:</span>
                                            <span style={{marginRight: "100px"}}>{item.name}</span>
                                        </li>
                                        <span>Счет: {item.name && item.result}</span>
                                    </div>
                                )
                            }
                        </ol>
                        :
                        <p>Пока нет результатов :(</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default RankingTable;
