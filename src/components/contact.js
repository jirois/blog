import React from 'react';
import './contact.scss'

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
                    <p>Through my social media handles</p>
                    <div className="social-media">
                        <div className="face">
                            facebook
                        </div>
                        <div className="face">
                            twitter
                        </div>
                        <div className="face">
                            linkedlin
                        </div>
                        

                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Contact;