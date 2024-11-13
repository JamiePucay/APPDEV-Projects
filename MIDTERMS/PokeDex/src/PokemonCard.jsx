import React from "react";

const PokemonCard = ({ pokemon, showPokemon }) => {
  const pokemonId = pokemon.url.split("/")[6];

  return (
    <div className="pokemon-card" onClick={() => {
      console.log(`Pokemon card clicked: ${pokemon.name}`);
      showPokemon(pokemon.url);
    }}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={pokemon.name}
      />
      <div className="pokemon-card-info">
        <h3>{pokemon.name}</h3>
        <p>ID: {pokemonId}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
