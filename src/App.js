import { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const req = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
      );
      const res = await req.json();
      setPokes(res.results);
    };
    fetchPokemon();
  }, []);

  const list = pokes.map((value) => (
    <PokeCard pokeURL={value.url} key={value.name} />
  ));
  return (
    <div className="App">
      <ol>{list}</ol>
    </div>
  );
}

export default App;
