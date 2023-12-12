import './App.css';
import particlesConfig from './Components/config/particles-config';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Floatingbutton from './Components/FloatButton/Floatbutton';
import { useState} from 'react';
import Navbar from "../src/Components/Navbar/Navbar.jsx"
import TypingAnimation from './Typography/TypingAnimation.jsx';
import Description from './Typography/Description/Description.jsx';
import CardAbout from './Components/Card-About/CardAbout.jsx';
import Project from './Pages/Projects/Project';
import Contact from "./Pages/ContactMe/Contact.jsx"

export default function App() {
  const [theme,setTheme]=useState(false);
  const [option,setOption]=useState(particlesConfig);

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  return (
    <div className="App">
    <Navbar className="navigation"/>
    <h1 className='heading'>Sahdev Rajput</h1>
    <div className='typing-animation'>
    <TypingAnimation />
    </div>
    <Description/>
       <Particles
      id="tsparticles"
      init={particlesInit}
      options={option}
    />
    <Floatingbutton theme={theme} setTheme={setTheme} setOption={setOption}/>
    <CardAbout id="section-1" theme={theme} className="about"/>
    <Project id="section-2"/>
    <Contact id="section-3"/>
    </div>
  );
}

