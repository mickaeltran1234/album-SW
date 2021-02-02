import React from 'react';
import style from '../css/hexagon.css';
import component from '../css/component.css';

const Hexagon = (props) => {
    return (
        <div
            className={`hexagon ${props.spin === true ? "spinning hidden" : ""}`}
            onClick={() => props.onClick()}
        >
        </div>)
}

export default Hexagon;