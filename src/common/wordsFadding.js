import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

const WORDS = [
  { id: 0, text: 'omas ajiri' },
  { id: 1, text: 'committed' },
  { id: 2, text: 'passionate' },
  { id: 3, text: 'curious' },
];

const Wrapper = styled.div`
  width: 6rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  text-align: center;
  font-style: italic;
  white-space: nowrap;
  color: #1599f5;
  transition: color 0.2s ease-out;
  & span {
    text-align: center;
    width: 100%;
    font-family: roboto;
    
  }
  
`;

export const WordsFading = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0);
  const wordsTransition = useTransition(WORDS[index], span => span.id, {
    config: config.stiff,
    delay: 450,
    duration: 100,
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
    //   top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });
  useEffect(() => setInterval(() => setIndex(current => (current + 1) % WORDS.length), 2500), []);
  return (
    <Wrapper>
      <i style={{ visibility: 'hidden' }}>self-taught</i>
      {wordsTransition.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      ))}
    </Wrapper>
  );
};