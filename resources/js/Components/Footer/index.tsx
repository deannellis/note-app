import React from "react";

const Footer = () => (
    <footer className="footer">
        <div className="footer__left"></div>
        <div className="footer__copyright">
            <a href="https://deannellis.me/">
                © Dean Nellis {new Date().getFullYear()}
            </a>
        </div>
        <div className="footer__right"></div>
    </footer>
);

export default Footer;
