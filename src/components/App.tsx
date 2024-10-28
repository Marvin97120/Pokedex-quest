import { useState } from "react";
import PokemonCard from "./PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const NextPokemon = () => {
    setPokemonIndex((pokemonIndex) =>
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex,
    );
  };
  const PrevPokemon = () => {
    setPokemonIndex((pokemonIndex) =>
      pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex,
    );
  };

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button type="button" onClick={PrevPokemon}>
        Précédent
      </button>
      <button type="button" onClick={NextPokemon}>
        Suivant
      </button>
    </>
  );
}

export default App;
