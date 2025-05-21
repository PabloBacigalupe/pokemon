import React from "react";
// import "./index.css";



const Card = ({ data }) => {
  // const { name, id, sprites,  } = data;

  return (
    <div className="pokemon-card">
      <h2>{data.name} (#{data.id})</h2>
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
        className="pokemon-img"
      />
      <p><strong>Tipos:</strong> {data.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Habilidades:</strong> {data.abilities.map(a => a.ability.name).join(", ")}</p>
    </div>
  );
};

export default Card;