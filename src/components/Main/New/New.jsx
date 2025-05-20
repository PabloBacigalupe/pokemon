import React, {useState} from "react";

const NewPokemon = ({add}) => {
    // Estado inicial del formulario
    const [values, setValues] = useState({
      name: "",
      id: "",
      tipo: "",
      abilities: "",
      url: ""
    });

    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
      add(values); // invocar la función add pasada por props
    };
  



  return <div><h2>Crea tu Pokémon</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label><br />
        <input type="text" name="name" onChange={handleChange} /><br />

        <label htmlFor="id">id</label><br />
        <input type="number" name="id" onChange={handleChange} /><br />

        <label htmlFor="type">Tipo</label><br />
        <input type="text" name="type" onChange={handleChange} /><br />

        <label htmlFor="abilities">Habilidades</label><br />
        <input type="text" name="id" onChange={handleChange} /><br />

        <label htmlFor="url">Url de la imagen</label><br />
        <input type="text" name="iurld" onChange={handleChange} /><br />

        <button type="submit">Crear pokemon</button>
      </form>

  </div>;
};

export default NewPokemon;
