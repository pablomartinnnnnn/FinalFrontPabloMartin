import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Components/AppContext';


function Detail() {
  const { id } = useParams();
  const { state } = useAppContext();
  const dentist = state.dentists.find((d) => d.id === parseInt(id));
  return (
    <div>
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <div className={state.theme === 'light' ? 'light-theme' : 'dark-theme'} style={{ textAlign: "center" }}>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p className='.error-message'>Dentista no encontrado.</p>
      )}
    </div>
  );
}

export default Detail;