import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Home from './Routes/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { AppProvider } from './Components/AppContext';
import { useAppContext } from './Components/AppContext';



function App() {
 


  return (
    
       <AppProvider>
       <Router>
         
           <Navbar />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/dentist/:id" element={<Detail />} />
             <Route path="/contacto" element={<Contact />} />
             <Route path="/favs" element={<Favs />} />
           </Routes>
           <Footer/>
        
       </Router>
     </AppProvider>
  );
}

export default App;
