import { useState } from 'react';
// import type { string[] } from 'typescript';
// declare type StringList = string[];

// interface ArtistsFilterProps {
//   mainList: string[];
//   sublists: string[];
// }

export default function ArtistsFilter() {
  // const mainList = [
  //       ["A - J", ["Anthony", "Billy", "Conner"]], // Sub-sub-menus for "A - J"
  //       ["K - Q", ["Katrina", "Nancy","Mary"]],
  //       ["R - Z", ["Roshada", "Timmy","Sal"]],
  // ];

  //   const subitemAJ = ["Anthony", "Billy", "Conner"];
  //   const subitemKQ = ["Katrina", "Nancy","Mary"];
  //   const subitemRZ = ["Roshada", "Timmy","Sal"];
  const orderedList = ['Artist'];
  const mainList = ['A - J', 'K - Q', 'R-Z'];

  const [isOpen, setIsOpen] = useState(-1);
  const handleMouseEnter = (index: number) => setIsOpen(index);
  const handleMouseLeave = () => setIsOpen(-1);
  const handleClick = (index: number) =>
    setIsOpen(isOpen === index ? -1 : index);

  //   const handleMouseEnter = (index: number) => {
  //       setIsOpen(index > 0 ? index + 1 : index); // +1 for sub-level and root-level indexes
  //     };

  return (
    <div>
      <ul>
        {orderedList.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            {item}
            {isOpen === index && orderedList[index] && (
              <ul>
                {mainList.map((sublist) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                  >
                    {sublist}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// {isOpen === index && (
//       <ul>
//         {mainList.map((sublist, subIndex) => (
//           <li key={subIndex} onMouseEnter={() => handleMouseEnter(subIndex + 1)}>
//             {sublist[0]} {/* Display main sub-menu item */}
//             {sublist[1] && ( // Check for sub-sub-menus
//               <ul>
//                 {sublist[1].map((subItem, itemIndex) => (
//                   <li key={itemIndex}>{subItem}</li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     ))}
/* {isOpen === index && orderedList[index] 
                                            && (
                                                <ul>
                                                      {mainList.map((sublist) => (
                                                      <li key={index}>{sublist}</li>))}
                                                </ul>
                                                )} */

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
