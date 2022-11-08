import React from 'react';
import './index.css'
import PlayingField from "./components/PlayingField/PlayingField";
import InfoBoard from "./components/InfoBoard/infoBoard";
import UserNameBlock from "./components/UserNameBlock/UserNameBlock";

const App = () => (
    <div className="root">
        <UserNameBlock/>
        <InfoBoard/>
        <PlayingField/>
    </div>
);

export default App;
