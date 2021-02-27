import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

const slides = [
    { id: 0, url: 'https://res.cloudinary.com/jinncy/image/upload/v1613725628/mblog/omas_2_drvgve.jpg' },
    { id: 1, url: 'https://res.cloudinary.com/jinncy/image/upload/v1613725530/mblog/omas_1_jf5l2k.jpg' },
    { id: 2, url: 'https://res.cloudinary.com/jinncy/image/upload/v1613725530/mblog/omas_3_qhe0j5.jpg' },
  ]

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
will-change: opacity;
`;

export const Carousel = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    });
    
  useEffect(() => setInterval(() => set(state => (state + 1) % 3), 2000), [])
  return transitions.map(({ item, props, key }) => (
   
     <animated.div
      key={key}
      style={{ ...props, backgroundImage: `${item.url}` }}
    />

  ));
};