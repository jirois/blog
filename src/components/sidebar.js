import React from 'react';
import { Link } from 'gatsby'
import {useGlobalContext} from '../context/context'
import './sidebar.scss'
const Sidebar = () => {
    const { isToggle} = useGlobalContext()
    return (
        
       <aside 
    //    role='button'
    //    tabIndex='-77'
    //    onKeyDown={closeSidebar}
    //    onClick={closeSidebar}
       
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
                      <Link to='/blog'>
                          Blog
                          </Link>
                  </li>
            
    </ul>
    </aside> 
    )
}
export default Sidebar;