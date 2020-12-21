import React from 'react';
import { useGlobalContext } from '../context/context'
import './button.scss'
const Button = () => {
    const {isToggle, toggleClass } = useGlobalContext()
    console.log(isToggle)
    return (
        <div 
        aria-pressed='false'
        tabIndex='0'
        role='button'
        onKeyDown={toggleClass}
        onClick={toggleClass}
        className={`
            ${ isToggle ? 'menu-icon open' : 'menu-icon'}
        `}>
            <span></span>   
            <span></span>   
            <span></span>
        </div>
    )
}
export default Button;