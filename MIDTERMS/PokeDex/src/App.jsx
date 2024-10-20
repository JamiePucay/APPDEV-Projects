import logo from "./logo.png";
import "./App.css";
import pokemonData from "./pokemonapi.json";
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

function App() {
  const [pokemonList, setPokemonList] = useState(pokemonData.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [region, setRegion] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = {
    all: [1, 898],
    kanto: [1, 151],
    johto: [152, 251],
    hoenn: [252, 386],
    sinnoh: [387, 494],
    unova: [495, 649],
    kalos: [650, 721],
    alola: [722, 809],
    galar: [810, 898],
  };

  const filteredPokemonList = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pokemon) => {
      const pokemonId = parseInt(pokemon.url.split("/")[6]);
      const [minId, maxId] = regions[region];
      return pokemonId >= minId && pokemonId <= maxId;
    });

  const showPokemon = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching Pokémon: ${response.statusText}`);
      }

      const data = await response.json();
      setSelectedPokemon(data);
      setIsModalOpen(true); // Open modal
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="App">
      <header>
        <img alt="react logo" className="logo" src={logo} />
      </header>

      <main>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="region-buttons">
          <button onClick={() => setRegion("all")}>All</button>
          <button onClick={() => setRegion("kanto")}>Kanto</button>
          <button onClick={() => setRegion("johto")}>Johto</button>
          <button onClick={() => setRegion("hoenn")}>Hoenn</button>
          <button onClick={() => setRegion("sinnoh")}>Sinnoh</button>
          <button onClick={() => setRegion("unova")}>Unova</button>
          <button onClick={() => setRegion("kalos")}>Kalos</button>
          <button onClick={() => setRegion("alola")}>Alola</button>
          <button onClick={() => setRegion("galar")}>Galar</button>
        </div>

        <div className="pokemon-grid">
          {filteredPokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              showPokemon={showPokemon}
            />
          ))}
        </div>

        {isModalOpen && selectedPokemon && (
          <PokemonModal
            pokemon={selectedPokemon}
            closeModal={closeModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
