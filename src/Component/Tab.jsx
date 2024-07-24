import React from "react";

const Tab = ({ children ,button }) => {
  return (
    <div>
      <menu>{button}</menu>
      {children}
    </div>
  );
};

export default Tab;
