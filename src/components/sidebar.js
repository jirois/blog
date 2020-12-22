import React from 'react';
import { Link } from 'gatsby'
// import {useGlobalContext} from '../context/context'
import './sidebar.scss'
const Sidebar = ({ isToggle , closeSidebar}) => {
    // const { isToggle,  closeSidebar} = useGlobalContext()
    return (
        
       <div 
       role='button'
       tabIndex='-77'
       onKeyDown={closeSidebar}
       onClick={closeSidebar}
       
       className={
           `${isToggle ? 'sidebar open' : 'sidebar'}`
       }>
           <ul className="sidebar-content">
          
                  <li>
                      <Link to='/'>
                          Home
                          </Link>
                  </li>
                  <li>
                      <Link to='/about'>
                          About
                          </Link>
                  </li>
                  <li>
                      <Link to='/contact'>
                          Contact
                          </Link>
                  </li>
                  <li>
                      <Link to='/blog'>
                          Blog
                          </Link>
                  </li>
            
    </ul>
    </div> 
    )
}
export default Sidebar;