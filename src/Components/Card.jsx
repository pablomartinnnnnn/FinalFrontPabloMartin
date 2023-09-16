import React from 'react';
import { useAppContext } from './AppContext';
import img from "../images/doctor.jpg";
import "../index.css";
import { Link } from 'react-router-dom';




function Card({ dentist, isFavorite, id }) {
  const { state, dispatch } = useAppContext();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: dentist.id });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: dentist });
    }
  };

 

  return (
    <div className="card">
    <img className="imagen" src={img} alt="" />
    <Link to={`/dentist/${id}`}>
    <h3>{dentist.name}</h3>
    </Link>
    <button onClick={handleToggleFavorite} className='favButton'>
      {isFavorite ? 'Quitar de favoritos' : "Agregar a favoritos" }
    </button>
  </div>
  
  );
}

export default Card;