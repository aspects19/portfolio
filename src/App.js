import React from 'react';
import Home from './components/Home/Home';
import General from './components/General/General';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Reviews from './components/Reviews/Review';
import Contacts from './components/Contacts/Contacts';
import './App.css';


function App() {
    return (
        <div className="app">
             <Home/> 
             <General/> 
             <About/> 
             <Skills/> 
             <Works/> 
             <Reviews/> 
             <Contacts/> 
        </div>
          
    );
}


export default App;
