import React from 'react';
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>

            <div className="contact-wrap">
                <div className="contact-message">
            
                    <p>Hi!, How about we connect today! You can reach me ASAP by sending a message </p>
                <a href="mailto:omasajiri@gmail.com" className='btn contact-btn'>Send a Message</a>
                </div>
                <div className="contact-or">Or</div>
                <div className="contact-message">
                    <div className="social-media">
                    <span className="social-text">Through my social media handles</span>
                        <div className="contact-media">
                        <a href="/facebook" className="social " target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icons facebook-icon"/>
                            <span>facebook</span> 
                        </a>
                        <a href="https://twitter.com/ajiriomas" className="social " target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="icons twitter-icon"/>

                           <span>twitter</span> 
                        </a>
                        <a href="https://www.linkledin.com" className="social " target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icons linkledin-icon"/>

                           <span>linkedlin</span> 
                        </a>
                        
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Contact;