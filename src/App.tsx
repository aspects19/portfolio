import React from 'react';
import General from './components/Navigation.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Works from './components/Works.tsx';
import Contacts from './components/Contacts.tsx';

function App() {
    return (
        <div className="app bg-black text-gray-200 pl-3 ">
             <General/>
             <Home/> 
             <About/> 
             <Skills/> 
             <Works/> 
             <Contacts/> 
        </div>
          
    );
}


export default App;
