import React, { useState, useEffect } from 'react';
import nav from '../css/nav.css'
import NavBarBtn from "../common/component/NavBarBtn";
import Hexagon from "../common/component/Hexagon";
import fade from "../common/function"

const Nav = (props) => {
    const [spinState, setSpinState] = useState(false)
    const [pageStatus, setPageState] = useState(false)
    const handleClickMenu = () => {
        let spinStatus = !spinState
        setSpinState(spinStatus);
        setPageState(!pageStatus);
    }
    useEffect(() => {
        fade('nav', pageStatus);
    })
    return (
        <div id="nav" className={`navigation p-relative lighten-dark-grey`}
        onChange={props.handleChange(pageStatus)}
        >
            <div className="toggle-menu p-absolute right-1 top-1">
                <NavBarBtn/>
            </div>
            <div className="logo-to-home">
                <Hexagon spin={spinState} onClick={handleClickMenu}/>
            </div>
        </div>
    )
}

export default Nav;