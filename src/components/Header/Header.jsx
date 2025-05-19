import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";

import { UserContext } from "../../context/UserContext";

const Header = () => {

  const { username, updateUsername } = useContext(UserContext);

  // Hook para navegar entre rutas
  const navigate = useNavigate();

  const handleOnClick = () => navigate("/");



  return <div>
    <p>Header</p>
    
    </div>;
};

export default Header;
