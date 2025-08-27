import React from "react";

export const ToastContainer = () => {
  return (
    <div>
        <div className="toast-container">
            <div className="toast">
                Success Toast <span>X</span>
            </div>
        </div>
      <div className="btn-container">
        <button>Success toast</button>
        <button>Info Toast</button>
        <button>Warning Toast</button>
        <button>Error Toast</button>
      </div>
    </div>
  );
};
