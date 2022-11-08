import React from 'react';
import "./styles.css"
import {useTypeSelector} from "../../hooks/useTypeSelector";

const UserNameBlock: React.FC = () => {

    const {gameInfo} = useTypeSelector(state => state)
    const {userNames} = gameInfo

    return (
        <div className="namesBlock">
            <div>User 1(X): {userNames.user_one}</div>
            <div>User 2(O): {userNames.user_two}</div>
        </div>
    );
};

export default UserNameBlock;
