import React from "react";

const Logo = (props) => {
  const logWhenClicked = () => {
    console.log("Pokedex Week 2");
  };
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
        alt="#"
        onClick = {logWhenClicked}
      />
    </header>
  );
};

export default Logo;
