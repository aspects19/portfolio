import React from 'react';
import General from './components/Navigation/Navigation.tsx';
import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
import Skills from './components/Skills/Skills.tsx';
import Works from './components/Works/Works.tsx';
import Contacts from './components/Contacts/Contacts.tsx';


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
