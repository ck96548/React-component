import React from 'react';
import './style.css';

function Button({label, onClick, isActive, ...props}) {
  return (
     <button className={`btn${isActive ? 'active' : ''}`}
      onClick={onClick}
      {...props}
      >{label}
      
      </button>
  )
}

export default Button