import { motion } from 'motion/react'
import General from './components/Navigation.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Contacts from './components/Contacts.tsx';
import Hero from './components/Hero.tsx';
import Home from './components/Home.tsx';

function App() {
    return (
        <div className="app bg-[#000013] text-gray-200 pl-3 pt-12 ">
            <General/>
            <Home/>
            <Hero/> 
            <About/> 
            <Skills/> 
            <Projects/> 
            <Contacts/> 
        </div>
          
    );
}


export default App;
