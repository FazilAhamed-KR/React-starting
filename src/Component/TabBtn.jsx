import React from "react";

const TabBtn = ({ children, onSelect, inselected }) => {
  return (
    <button className={inselected ? "active" : undefined} onClick={onSelect}>
      {children}
    </button>
  );
};

export default TabBtn;
