import React, {useState}from 'react';
// import { useGlobalContext } from '../context/context'
import Sidebar from './sidebar'

import './button.scss'
const Button = () => {
    const [isToggle, setToggle] = useState(false)
    const toggleClass = () => {
        setToggle(!isToggle)
    }
    const closeSidebar = () => {
        setToggle(false)
    }
    return (
        <>
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
        <Sidebar isToggle={isToggle} closeSidebar={closeSidebar} />
        </>
    )
}
export default Button;