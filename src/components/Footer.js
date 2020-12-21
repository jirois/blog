import React from 'react';
import '../styles/styles.scss'
const Footer = () => {
    return(
    <footer className="footer">
        © {new Date().getFullYear()}, Jinncy Cannon
        {` `}
        <a href="https://twitter.com/ajiriomas">me</a>
      </footer>
    )
}

export default Footer;