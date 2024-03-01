import { useState } from 'react';
// import type { string[] } from 'typescript';
declare type StringList = string[];


const mainList = ["A - J", "K - Q", "R-Z"];
const sublists = ["sublist item 1","sublist item 2","sublist item 3"];

interface ArtistsFilterProps {
  mainList: string[]; 
  sublists: string[]; 
} 

export default function ArtistsFilter( { mainList, sublists }: ArtistsFilterProps) {
  
  
  
        
    
        const [isOpen, setIsOpen] = useState(null);
      
        const handleMouseEnter = (index) => setIsOpen(index);
        const handleMouseLeave = () => setIsOpen(null);
        const handleClick = (index) => setIsOpen(isOpen === index ? null : index);
      
        return (
          <ul>
                        {mainList.map((item, index) => (
                                        <li key={index} 
                                                onMouseEnter={() => handleMouseEnter(index)} 
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => handleClick(index)}>
                                                {item}
                                                {isOpen === index && sublists[index] && (
                                                <ul className="sublist">
                                                {sublists[index].map((subItem) => (
                                                <li key={subItem}>{subItem}</li>
                                                ))}
                                                </ul>
                                                )}
                                        </li>
                        ))}
          </ul>
        );
      };

      
// function ArtistsFilter() {
        
//         return (
//             <div >
//                     <ul>
//                     <li id="dropdown-main"><a href="#" id="dropdown-title">Artists <i className="fa-solid fa-angle-down"></i></a></li>
                        
//                             <ul className="artist-list">
//                                     <li className="artist-list-1"><a href="#">A -  J  <i className="fa-solid fa-angle-right"></i> </a></li>
//                                         <ul className="artist-sublist-1">
//                                             <li><a href="#">sublist item 1</a></li>
//                                             <li><a href="#">sublist item 2</a></li>
//                                             <li><a href="#">sublist item 3</a></li>
//                                         </ul>
//                                     <li className="artist-list-2"><a href="#">K - Q <i className="fa-solid fa-angle-right"></i></a></li>
//                                         <ul className="artist-sublist-2">
//                                                 <li><a href="#">sublist item 4</a></li>
//                                                 <li><a href="#">sublist item 5</a></li>
//                                                 <li><a href="#">sublist item 6</a></li>
//                                         </ul>
//                                     <li className="artist-list-3"><a href="#">R - Z <i className="fa-solid fa-angle-right"></i></a></li>
//                                     <ul className="artist-sublist-3">
//                                             <li><a href="#">sublist item 7</a></li>
//                                             <li><a href="#">sublist item 8</a></li>
//                                             <li><a href="#">sublist item 9</a></li>
//                                     </ul>
                            
//                             </ul>
                      
//                     </ul>
//             </div>
//         )
//     }

// export default ArtistsFilter;