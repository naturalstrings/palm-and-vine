import { artistData } from "./artistData";
import MenuItems from './MenuItems';
import './Filters.css';

const ArtistNavbar = () => {
    const depthLevel = 0;
    return(
                <nav className="desktop-nav">
                    <ul className="menus">
                        {artistData.map((menu,index) => {
                            return (
                            // <li  className="menu-items" key={index}  >
                            //     <a href={menu.url}>{menu.title}</a>
                            // </li>
                            <MenuItems  items={menu} key={index} depthLevel={depthLevel}/>
                            
                            )}
                        )}

                    
                    </ul>
                </nav>
            );
};

export default ArtistNavbar;