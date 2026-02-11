import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()} Movie App - All rights reserved.</p>
        </footer>
    )
}

export default Footer;