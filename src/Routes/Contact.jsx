import React, { useState } from 'react';
import { useAppContext } from '../Components/AppContext';


function Contact() {
  const { state } = useAppContext();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.name.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage(null);
    } else {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setError(null);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
     
      <div className={state.theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Contacto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
        
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;