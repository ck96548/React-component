// import React from 'react'
// import DropdownItem from './DropdownItem';


// const NestedDropdown = ({items}) => {
  
//   return (
//     <div>
//         {items?.map((item,index)=>(
//         <DropDownItem key={index} item={item} />
         
//         ))}
//     </div>
//   )
// }

// export default NestedDropdown

import React, { useState } from 'react';
import './NestedDropdown.css';
import DropdownItem from './DropdownItem';


const NestedDropdown = ({ items, title = 'Menu', onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nested-dropdown">
      <button
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        {title} {isMenuOpen ? '▼' : '▶'}
      </button>
      {isMenuOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <DropdownItem key={index} item={item} onSelect={onSelect} /> // Pass onSelect to items
          ))}
        </ul>
      )}
    </div>
  );
};

export default NestedDropdown;

