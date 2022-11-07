import React from 'react';
import './index.css'
import PlayingField from "./components/PlayingField/PlayingField";
import InfoBoard from "./components/InfoBoard/infoBoard";


const App = () => {

    return (
        <div className="root">
            <InfoBoard/>
            <PlayingField/>
        </div>
    );
};

export default App;
