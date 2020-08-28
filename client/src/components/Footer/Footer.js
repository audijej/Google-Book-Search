import React from "react";
// import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <h5 style={{ color: "white" }}>Built with React</h5>
            <i className="fab fa-react" style={{color: "blue"}}></i>
            <h5 style={{ color: "white" }}>Project By: Jesse A.</h5>
            {/* <ul className="contacts"> */}
            <li className="social-media-icon"><a
                href="https://www.linkedin.com/in/jesse-a-0617881a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIR0XT9mQlaD%2F6EEsl6UAQ%3D%3D"
                target="blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
            <li className="social-media-icon"><a href="https://github.com/audijej" target="blank"><i
                className="fab fa-github"></i></a></li>
            <li className="social-media-icon"><a href="https://www.instagram.com/audigoodness/" target="blank"><i
                className="fab fa-instagram-square"></i></a></li>
            {/* </ul> */}
        </footer>
    );
}

export default Footer;
