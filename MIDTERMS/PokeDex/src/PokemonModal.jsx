import React from "react";
import "./PokemonModal.css";

function PokemonModal({ pokemon, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        {pokemon.stats.map((stat, index) => (
          <div key={index}>
            <p>
              {stat.stat.name}: {stat.base_stat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonModal;
