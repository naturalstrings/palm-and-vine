import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import { useState, useEffect, useRef } from "react";

const MenuItems = ({items,depthLevel }) => {
    
    const [dropdown,setDropdown] = useState(false);
    const onMouseEnter = () => {setDropdown(true)};
    const onMouseLeave = () => {setDropdown(false)};
    let ref = useRef();
    
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
        
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);
       
    return(
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    
                        {items.title}{' '}
                        {depthLevel > 0 ? <i className="fa-solid fa-sm fa-angle-right"></i> : <i className="fa-solid fa-sm fa-angle-down"/>}
                    
                    <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                
                </> ) : (
                            <Link href={items.url}>{items.title}</Link>
                        )
             
            
            }
        </li>
    );
};
export default MenuItems;