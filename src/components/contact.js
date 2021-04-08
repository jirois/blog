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
            
                    <p>Hi!, How about we connect today! You can me react ASAP by sending a message </p>
                <a href="mailto:omasajiri@gmail.com" className='btn contact-btn'>Send a Message</a>
                </div>
                <div className="contact-or">Or</div>
                <div className="contact-message">
                    <div className="social-media">
                    <p>Through my social media handles</p>
                        <div className="contact-media">
                        <a href="/facebook" className="social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icons"/>
                            <span>facebook</span> 
                        </a>
                        <a href="https://twitter.com/ajiriomas" className="social" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="icons"/>

                           <span>twitter</span> 
                        </a>
                        <a href="https://www.linkledin.com" className="social" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icons"/>

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