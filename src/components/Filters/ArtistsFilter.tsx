import { useState } from 'react';
// import type { string[] } from 'typescript';
declare type StringList = string[];

// interface ArtistsFilterProps {
//   mainList: string[]; 
//   sublists: string[]; 
// } 



const sublists = ["sublist item 1","sublist item 2","sublist item 3"];

export default function ArtistsFilter() {
  
        const orderedList = ["Artist"]
        const mainList = ["A - J", "K - Q", "R-Z"];
        const [isOpen, setIsOpen] = useState(-1);
      
        const handleMouseEnter = (index:number) => setIsOpen(index);
        const handleMouseLeave = () => setIsOpen(-1);
        const handleClick = (index:number) => setIsOpen(isOpen === index ? -1 : index);
      
        return (
          <div>
            <ul> 
            
                              {orderedList.map((item, index) => (
                                    <li key={index} 
                                            onMouseEnter={() => handleMouseEnter(index)} 
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(index)}>
                                            {item}
                                            {isOpen === index && mainList[index] 
                                            && (
                                                <ul className="sublist">
                                                      {mainList.map((subItem) => (
                                                      <li key={index}>{subItem}</li>
                                                      ))}
                                                </ul>
                                            )}
                                    </li>
                              ))}
                          
              
              
              
                          
                          <ul>
                              {mainList.map((item, index) => (
                                    <li key={index} 
                                            onMouseEnter={() => handleMouseEnter(index)} 
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(index)}>
                                            {item}
                                            {isOpen === index && sublists[index] && (
                                                <ul className="sublist">
                                                      {sublists.map((subItem) => (
                                                      <li key={index}>{subItem}</li>
                                                      ))}
                                                </ul>
                                            )}
                                    </li>
                              ))}
                          </ul>
              </ul>
          </div>
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