import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  return (
    <div>
        <input type="text" value={city}></input>
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
