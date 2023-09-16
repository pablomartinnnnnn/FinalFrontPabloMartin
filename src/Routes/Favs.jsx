import React from 'react';
import { useAppContext } from '../Components/AppContext';
import Card from '../Components/Card';
import "../index.css";

function Favs() {
  const { state } = useAppContext();

  return (
    <div>
      
      <div className={state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Dentistas Destacados</h1>
      
        {state.favorites.length === 0 ? (
          <p className='error-message'> No hay dentistas destacados.</p>
          ) : (
            <div className='card-grid'>
              {state.favorites.map((dentist) => (
                <Card key={dentist.id} dentist={dentist} isFavorite={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Favs;