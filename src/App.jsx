import { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//importar el contexto
import { UserContext } from './context/UserContext'


function App() {
  const [count, setCount] = useState("");

  const [username, setUsername] = useState('');

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const userData = {
    username,
    updateUsername
  }

  return (
    <>
    <UserContext.Provider value={userData}>
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </UserContext.Provider>

      <div>
       
      </div>
     
    </>
  );
}

export default App;
