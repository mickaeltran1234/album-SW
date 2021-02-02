import React, { useEffect } from 'react';
import main from '../css/main.css';
import fade from "../common/function";
import ListCharacters from "../page/ListCharacters";

const Main = (props) => {
    useEffect(() => {
        fade('main', props.pageOK);
    })

    return (
        <div id="main" className="hidden d-none">
            <ListCharacters/>
        </div>
    )
}

export default Main;