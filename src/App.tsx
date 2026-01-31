import General from "./components/Navigation.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contacts from "./components/Contacts.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <div className="app bg-[#010116] text-gray-200 pl-3 pt-12 max-w-full">
      <General />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
