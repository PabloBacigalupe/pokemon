import React, { useState, useRef, useEffect } from "react";
import Card from "../PokemonList/PokemonCard";


// import "./index.css";


const PokemonList = () => {
  const [pokemon, setPokemon] = useState(null);
  const [values, setValues] = useState({ name: "" });
  const inputRef = useRef("");

  // Por defecto buscamos bulbasur
  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
      const data = await resp.json();
      setPokemon(data);
    };

    getPokemon();
  }, []);

  // Controlar cambios del input
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  // buscar el Pokemon por search
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${values.name}`);
    if (resp.ok) {
      const data = await resp.json();
      setPokemon(data);
    } else {
      setPokemon("");
    }
  };

  return (
    <>
      <form className="search-form"  onSubmit={handleSubmit}>
        <label className="search-title" htmlFor="name"></label>
        <input
        placeholder="🔍 Escribe el nombre de un Pokémon"
          className="search-input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          ref={inputRef}
        />
        {values.name ? (
          <button className="search-button" type="submit">Buscar</button>
        ) : (
          <b className="search-detail">Rellena el campo para poder buscar</b>
        )}
      </form>

      {/* Mostrar la tarjeta del Pokémon si existe */}
      {pokemon ? (
        <div className="card-container">
        <Card data={pokemon} />
      </div>
    ) : (
      <p>Pokémon no encontrado</p>
    )}
    </>
  );
};

export default PokemonList;