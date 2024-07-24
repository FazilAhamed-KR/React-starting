import React from "react";

const Header = () => {
  const reactDescription = ["Fundamental", "Core", "Crucial"];

  function genRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescription[genRandom(2)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
