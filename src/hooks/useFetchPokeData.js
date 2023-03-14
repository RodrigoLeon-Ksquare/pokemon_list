import { useEffect, useState } from "react";

const useFetchPokeData = (pokeURL) => {
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
  //return { name, order, imgURL, types };
  return [name, order, imgURL, types];
};

export default useFetchPokeData;
