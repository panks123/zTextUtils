import '../Footer.css';
import React  from 'react';

function Footer(props){
    return(
        <div className="footer">
            <div className="footer-item" id="item1">
                <img id="me" src="images/me1.png" alt="Pankaj"/>
            </div>

            <div className="footer-item" id="item2">Pankaj Kumar</div>

            <div className="footer-item" id="item3">Copyright © <span id="copyright-year">{props.year}</span> <span className="i">z</span>TextUtils</div>

            <div className="footer-item" id="item4">
                <a href="https://www.linkedin.com/in/pankaj-kumar-353358120/" target="_blank" rel="noopener noreferrer">
                    <img src="images/linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://github.com/panks123" target="_blank" rel="noopener noreferrer">
                    <img src="images/github.png" alt="github"></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;