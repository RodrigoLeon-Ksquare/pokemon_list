import React from "react";
import { useEffect, useState } from "react";

function PokeCard({ pokeURL }) {
  const [name, setName] = useState("");
  const [order, setOrder] = useState(0);
  const [imgURL, setImg] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchPokeData = async () => {
      const req = await fetch(pokeURL);
      const res = await req.json();
      setName(res.name);
      setOrder(res.order);
      setImg(res.sprites.front_shiny);
      setTypes(res.types);
    };
    if (pokeURL) {
      fetchPokeData();
    }
  }, [pokeURL]);
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
