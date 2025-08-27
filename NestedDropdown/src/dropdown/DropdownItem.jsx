import React, { useState } from 'react';
import './NestedDropdown.css';

const DropdownItem = ({ item, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (onSelect) {
      
      onSelect(item.label); // Call the onSelect handler with the item's label
    }
    if (item.children) {
      setIsOpen(!isOpen); // Toggle submenu if children exist
    }
  };

  return (
    <li className="dropdown-item">
      <button
        onClick={handleClick} // Unified handler for both toggle and select
        aria-expanded={item.children ? isOpen : undefined}
        aria-haspopup={!!item.children}
      >
        {item.label}
        {item.children && <span className="arrow">{isOpen ? '▼' : '▶'}</span>}
      </button>
      {item.children && isOpen && (
        <ul className="dropdown-submenu">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} onSelect={onSelect} /> // Pass onSelect recursively
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;







// import React, { useState } from "react";

// // Recursive dropdown component
// const DropDownlist = ({ item }) => {
//   const [selectedItem, setSelectedItem] = useState(""); // Tracks the selected value
//   const [childItems, setChildItems] = useState([]); // Tracks children to show (for cascading)

//   // Handler for when an item is selected
//   const handleSelectedItem = (e) => {
//     const value = e.target.value;
//     setSelectedItem(value); // Update local state
//     console.log("Selected Item:", value); // Log the selected value

//     // Find the selected item's children (if any) and show them
//     const selectedChild = item.children?.find((child) => child.label === value);
//     setChildItems(selectedChild?.children || []); // Cascade to children
//   };

//   return (
//     <div style={{ marginBottom: "10px" }}> {/* Basic spacing for cascading */}
//       <select
//         value={selectedItem}
//         onChange={handleSelectedItem} // Corrected: Pass event properly
//       >
//         {/* Default option */}
//         <option value="">Select {item.label}</option>
        
//         {/* Populate options from children if available, else just the item itself */}
//         {item.children && item.children.length > 0 ? (
//           item.children.map((child, index) => (
//             <option key={index} value={child.label}>
//               {child.label}
//             </option>
//           ))
//         ) : (
//           <option value={item.label}>{item.label}</option>
//         )}
//       </select>

//       {/* Recursively render child dropdowns if children are selected/shown */}
//       {childItems.map((child, index) => (
//         <DropDownlist key={index} item={{ label: child.label, children: child.children }} />
//       ))}
//     </div>
//   );
// };

// export default DropDownlist;

