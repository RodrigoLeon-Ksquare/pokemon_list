import React, { useEffect } from "react";
import { useState } from "react";

function PokemonList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const asynFn = async () => {
      const req = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const userData = await req.json();
      setUsers(userData.results);
      console.log(userData);
    };
    asynFn();
  }, []);
  const userList = users.map((value) => (
    <li key={value.id}>
      {value.name} - {value.url}{" "}
    </li>
  ));
  return (
    <div>
      <ol>{userList}</ol>
    </div>
  );
}

export default PokemonList;
