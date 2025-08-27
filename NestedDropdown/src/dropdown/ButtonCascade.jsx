import React, { useState } from "react";

// Recursive button-based cascading component
const ButtonCascade = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false); // Tracks if children are shown

  // Handler for button click
  const handleClick = (label, children) => {
    console.log("Selected Item:", label); // Log the selected label
    if (children && children.length > 0) {
      setIsOpen(!isOpen); // Toggle children visibility if they exist
    }
  };

  return (
    <div style={{ marginLeft: `${level * 20}px`, marginBottom: "10px" }}> {/* Indentation for nesting */}
      {/* Render the current item's button */}
      <button
        onClick={() => handleClick(item.label, item.children)}
        aria-expanded={isOpen}
        style={{
          padding: "8px 16px",
          backgroundColor: isOpen ? "#28a745" : "#007bff", // Green when open, blue otherwise
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {item.label} {item.children && (isOpen ? "▼" : "▶")} {/* Arrow indicator for items with children */}
      </button>

      {/* If open and has children, recursively render buttons for them */}
      {isOpen && item.children && (
        <div style={{ marginTop: "5px" }}>
          {item.children.map((child, index) => (
            <ButtonCascade key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonCascade;
