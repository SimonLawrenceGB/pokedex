import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);
  const catchPokemon = (caught) => {
    return setCaught(caught + 1);
  };

  return (
    <div>
      <p>
        Caught {caught} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
