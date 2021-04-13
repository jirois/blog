import React, { useState, useEffect} from 'react'
import { useTransition, animated, config } from 'react-spring'
import './aboutSlider.css';

const slides = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/jinncy/image/upload/v1613725628/mblog/omas_2_drvgve.jpg',
    text: 'Am a developer'
},
{
    id: 2,
    url: 'https://res.cloudinary.com/jinncy/image/upload/v1618306772/mblog/omas_4_hqkkw4.png',
    text: 'Am a writer'
},
{
    id: 3,
    url: 'https://res.cloudinary.com/jinncy/image/upload/v1613725530/mblog/omas_3_qhe0j5.jpg',
    text: 'Am a Pharmacist'
},
  
]


const Carousel = () =>  {

  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: {opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: config.molasses,
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 4000), [])
  return transitions.map(({ item, props, key }) => (
    
    <animated.div key={key}
    className="bg"
    style={{...props, backgroundImage: `url(${item.url})`}} ><span className="about-text">{item.text}</span></animated.div>
   
  ))
}
export default Carousel