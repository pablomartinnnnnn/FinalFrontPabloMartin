import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';
import "../index.css";
import img from "../images/DH.png";



function Navbar() {
  const { state, dispatch } = useAppContext();
  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    
    <nav className={`navbar ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
       <div>
        <i>
          <img className="logo" src={img} alt="logo" />
        </i>
      </div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li>
          <button onClick={toggleTheme} className='theme-button'>Cambiar Tema</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;