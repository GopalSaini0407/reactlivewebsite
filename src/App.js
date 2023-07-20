import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';

import Footer from "./Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    
    
  )
}

export default App;
