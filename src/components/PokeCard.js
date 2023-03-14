import React from "react";
import { useEffect, useState } from "react";
import useFetchPokeData from "../hooks/useFetchPokeData.js";

function PokeCard({ pokeURL }) {
  const [name, order, imgURL, types] = useFetchPokeData(pokeURL);

  const list = types.map((value) => (
    <li key={value.type.name}> {value.type.name} </li>
  ));

  return (
    <div>
      <h3>
        {order}-{name}
      </h3>
      <h5>{list}</h5>
      <figcaption>{imgURL && <img src={imgURL} alt={name} />}</figcaption>
    </div>
  );
}

export default PokeCard;
