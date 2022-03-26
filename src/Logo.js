import React from "react";

const Logo = (props) => {
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
        alt="#"
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
