import React, { useEffect } from 'react';
import footer from '../css/footer.css';
import fade from "../common/function";

const Footer = (props) => {
    useEffect(() => {
        fade('footer', props.pageOK);
    })

    return (
        <div id="footer" className="hidden d-none">
        </div>
    )
}

export default Footer;