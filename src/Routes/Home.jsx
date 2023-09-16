import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Components/AppContext';
import Card from '../Components/Card';
import "../index.css";

function Home() {
  const { state } = useAppContext();
  const h1ClassName = state.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div className={h1ClassName} >
      <h1 >Lista de Dentistas</h1>
    
      {state.loading ? (
        <p>Cargando...</p>
      ) : (
      
        <div className={state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
          
        <div className="card-grid">
        
          {state.dentists.map((dentist) => (
              <div key={dentist.id}>
             
            
              <Card dentist={dentist} id={dentist.id} />
              
            </div>
           
          ))}
        </div>
        </div>
    
      )}
    </div>
  );
}

export default Home;