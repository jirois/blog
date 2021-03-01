import React from 'react';
import './about.scss'
import Carousel  from '../common/aboutCarousel'
const About = () => {
    return (
        <div className="about">
            <h1>About</h1>

            <div className="about-wrap">
            
               <Carousel />
              
            </div>
        </div>
    )
}
export default About;