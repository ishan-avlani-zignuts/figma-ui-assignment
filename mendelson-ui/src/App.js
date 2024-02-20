import './assets/styles/App.css';
import React from 'react';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Ourteams from './pages/Ourteams';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Footer from './pages/Footer';
function App() {
  return (
    <div className="App" >
        <Home/>
        <Aboutus/>
        <Services/>
        <Ourteams/>
        <Projects/>
        <Clients/>
        <Footer/>
    </div>
  );
}

export default App;
