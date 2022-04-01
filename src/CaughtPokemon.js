import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    const newPokemon = "Mewtwo";
    // const newArray = caught.concat(newPokemon); // Option 1

    // const newArray = [...caught, newPokemon]; // Option 2

    // const newArray = [...caught]; // Option 3
    // newArray.push(newPokemon);

    const newArray = caught.slice();
    newArray.push(newPokemon);

    setCaught(newArray);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
