import React, { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import axios from "axios";

const App = () => {
  const [allPokemonData, setAllPokemonData] = useState([]);

  const fetchPokemonData = async () => {
    const pokemonListResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const pokemonList = pokemonListResponse.data.results;

    const pokemonDetailsList = await Promise.all(
      pokemonList.map(async (pokemonItem) => {
        const pokemonDetailResponse = await axios.get(pokemonItem.url);
        return pokemonDetailResponse;
      })
    );

    setAllPokemonData(pokemonDetailsList);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);
  return (
    <div
      id="full-cards-container"
      className="p-10 pb-20 flex items-center justify-center flex-wrap gap-20"
    >
      {allPokemonData.map((pokemon) => {
        return <PokemonCard key={pokemon.data.id} pokemon={pokemon}/>;
      })}
    </div>
  );
};

export default App;
