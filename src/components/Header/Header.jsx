import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar"
import PokeLogo from '../../assets/pokemon-logo-pokemon-icon-transparent-free-png.webp';

const Header = () => {

  const { username, updateUsername } = useContext(UserContext);

  // Hook para navegar entre rutas
  const navigate = useNavigate();




  return <div>

      <Navbar/>
      <img src={PokeLogo} alt="pokeLogo" className="poke-logo" />


    

    
    </div>;
};

export default Header;
